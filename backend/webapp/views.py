from django.http import JsonResponse
from django.core.paginator import Paginator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from webapp.models import Article, FAQ, ContactUs
import json, geoip2.database, geoip2.errors, re
from webapp.models import Country, Contact

GEOIP_DB_PATH = '/home/jared/Documents/Dropdown Documents/AnyHJS/backend/GeoLite2-Country.mmdb'
reader = geoip2.database.Reader(GEOIP_DB_PATH)

def pagination(request, queryset):
    page = request.GET.get('page','')
    page_size = request.GET.get('no_articles','')

    page = int(page) if page.isdigit() and int(page) > 0 else 1
    page_size = int(page_size) if page_size.isdigit() and 1 <= int(page_size) <= 100 else 10

    pg = Paginator(queryset, page_size)
    page = pg.get_page(page)
    return page, pg, page_size

def get_client_ip(request):
    ''' Get client IP address from request '''

    xforward = request.META.get('HTTP_X_FORWARDED_FOR')
    if xforward:
        return xforward.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')

def get_country_for_ip(ip):
    try:
        response = reader.country(ip)
        print(response.to_dict())
    except (geoip2.errors.AddressNotFoundError, ValueError):
        return None

    if not response.country.iso_code:
        return None

    return {
        'iso_code': response.country.iso_code,
        'name': response.country.name,
        'continent' : response.continent.code
    }

# Create your views here.
def index(request):
    return JsonResponse({'status': 'success', 'message': 'Welcome to the API'})

@ensure_csrf_cookie
def csrf(request):
    ''' View to set CSRF cookie '''
    return JsonResponse({'detail': 'CSRF cookie set'})

def api_blog_articles(request):
    ''' API endpoint to get paginated list of articles '''
    
    qs = Article.objects.filter(display=True).order_by('-created')
    page, pg, page_size = pagination(request, qs)
    return JsonResponse({
        'status': 'success', 
        'page': page.number,
        'page_size': page_size,
        'total_pages': pg.num_pages,
        'total_items': pg.count,
        'has_next': page.has_next(),
        'has_previous': page.has_previous(),
        'data': [{
            'tag' : i.tag,
            'created' : i.created,
            'title' : i.title,
            'summary' : i.summary,
            'description' : i.description,
            'display' : i.display
        } for i in page],
    })

def api_help_centre(request):
    ''' API endpoint to get paginated list of articles '''

    queryset = FAQ.objects.filter(display='show').order_by('ordering', '-created')
    page, pg, page_size = pagination(request, queryset)
    return JsonResponse({
        'status': 'success', 
        'page': page.number,
        'page_size': page_size,
        'total_pages': pg.num_pages,
        'total_items': pg.count,
        'has_next': page.has_next(),
        'has_previous': page.has_previous(),
        'data': [{
            'question': i.question,
            'answer' : i.answer,
            'created' : i.created,
            'display' : i.display,
            'ordering' : i.ordering
        } for i in page],
    })

def api_contact_us(request):
    if request.method == 'POST':

        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON payload.'}, status=400)

        name = data.get('name', '').split(' ', 1)
        email = data.get('email', '')
        subject = data.get('subject', '')
        message = data.get('message', '')
        
        ip = get_client_ip(request)
        country_info = get_country_for_ip(ip)
        country = Country.objects.all().filter(name = country_info['name']).first() if country_info else None

        new_message = ContactUs(
            ip_address = ip,
            country = country,
            name = name,
            email = email,
            subject = subject,
            message = message,
            user_agent = request.META.get('HTTP_USER_AGENT', '')
        )
        new_message.save()

        return JsonResponse({'status': 'success', 'message': 'Contact message received.'})

def auth_status(request):
    if request.user.is_authenticated:
        return JsonResponse({
            'status' : 'success', 
            'isAuthenticated' : request.user.is_authenticated, 'user' : {
                'username' : request.user.username,
                'email' : request.user.email,
                'first_name' : request.user.first_name,
                'last_name' : request.user.last_name
            }
        })
    return JsonResponse({'status' : 'success', 'isAuthenticated' : request.user.is_authenticated, 'user' : None})

@csrf_protect
def auth_login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON payload.'}, status=400)

        email = data.get('email', '').strip()
        password = data.get('password', '')

        if email and password:
            user = authenticate(request, username=email, password=password)
            if user:
                login(request, user)
                return JsonResponse({'status': 'success', 'message': 'Logged in successfully.'})

            else:
                return JsonResponse({'status': 'error', 'message': 'Invalid email or password.'}, status=400)
        else:
            return JsonResponse({'status': 'error', 'message': 'Email and password are required.'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Method not allowed.'}, status=405)

@csrf_protect
def auth_logout(request):
    if request.method != 'POST':
        return JsonResponse(
            {'status': 'error', 'message': 'Method not allowed.'},
            status=405,
        )

    logout(request)

    return JsonResponse({
        'status': 'success',
        'message': 'Logged out successfully.',
        'isAuthenticated': False,
        'user': None,
    })

@csrf_protect
def auth_register(request):
    if request.method != "POST":
        return JsonResponse({"status": "error", "message": "Method not allowed."}, status=405)

    try:
        data = json.loads(request.body.decode("utf-8"))
    except json.JSONDecodeError:
        return JsonResponse({"status": "error", "message": "Invalid JSON payload."},status=400)

    name = data.get("name", '')
    if name:
        email = data.get("email", '').lower().strip()
        if email:
            password = data.get("password", '')
            if password:
                password_confirm = data.get("passwordConfirm", '')
                if password_confirm:
                    if password == password_confirm:
                        terms_accepted = data.get("termsAccepted", '')
                        if terms_accepted:
                            if re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$', password):
                                if not User.objects.filter(email=email).exists():
                                    user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
                                    login(request, user)
                                    return JsonResponse(
                                        {"status": "success", "message": "Account created successfully. Please log in.",
                                            "user": {
                                                "username": user.username, 
                                                "email": user.email,
                                            },
                                        },status=201,
                                    )
                                else:
                                    return JsonResponse({"status": "error", "message": "An account with this email already exists."}, status=200)
                            else:
                                return JsonResponse({
                                    "status": "error", 
                                    "message": "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one symbol."
                                }, status=200)
                        else:
                            return JsonResponse({"status": "error", "message": "You must accept the terms and conditions."}, status=200)
                    else:
                        return JsonResponse({"status": "error", "message": "Passwords do not match."}, status=200)
                else:
                    return JsonResponse({"status": "error", "message": "Password confirmation is required."}, status=200)
            else:
                return JsonResponse({"status": "error", "message": "Password is required."}, status=200)    
        else:
            return JsonResponse({"status": "error", "message": "Email is required."}, status=200)
    else:
        return JsonResponse({"status": "error", "message": "Name is required."}, status=200)

@csrf_protect
def account_profile(request):
    if not request.user.is_authenticated:
        return JsonResponse({"status": "error", "message": "Authentication required."}, status=403)

    # Get or create a Contact for this user
    contact, created = Contact.objects.get_or_create(
        user=request.user,
        defaults={"first_name": request.user.first_name, "last_name": request.user.last_name, "email": request.user.email,},
    )

    if request.method == "GET":
        return JsonResponse(
            {
                "status": "success",
                "profile": {
                    "first_name": contact.first_name or "",
                    "last_name": contact.last_name or "",
                    "email": contact.email or "",
                    "phone": contact.phone or "",
                    "title": contact.title or "",
                    "gender": contact.gender or "",
                },
            },
            status=200,
        )

    elif request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON payload."}, status=400)

        first_name = data.get("first_name",'')
        last_name = data.get("last_name",'')
        phone = data.get("phone",'')
        title = data.get("title",'')
        gender = data.get("gender",'')

        contact.first_name = first_name
        contact.last_name = last_name
        contact.phone = phone
        contact.title = title
        contact.gender = gender
        contact.save()

        # Optionally sync back to the auth user as well
        request.user.first_name = first_name
        request.user.last_name = last_name
        request.user.save(update_fields=["first_name", "last_name"])

        return JsonResponse(
            {
                "status": "success",
                "message": "Your details have been updated.",
                "profile": {
                    "first_name": contact.first_name or "",
                    "last_name": contact.last_name or "",
                    "email": contact.email or "",
                    "phone": contact.phone or "",
                    "title": contact.title or "",
                    "gender": contact.gender or "",
                },
            },
            status=200,
        )

    return JsonResponse(
        {"status": "error", "message": "Method not allowed."},
        status=405,
    )