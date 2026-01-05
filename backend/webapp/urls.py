from django.urls import path
from webapp.views import index, api_blog_articles, api_help_centre, api_contact_us, csrf, auth_login, auth_status, auth_logout, auth_register, \
    account_profile

urlpatterns = [
    path('', index, name='index'),
    path('api/blog-articles/', api_blog_articles, name='api_blog_articles'),
    path('api/help-centre/', api_help_centre, name='api_help_centre'),
    path('api/contact-us/', api_contact_us, name='api_contact_us'),
    path("api/csrf/", csrf, name="api-csrf"),
    path("api/auth/login/", auth_login, name="api_login"),
    path('api/auth/status/', auth_status, name='api_auth_status'),
    path('api/auth/logout/', auth_logout, name='api_auth_logout'),
    path('api/auth/register/', auth_register, name='api_auth_register'),
    path('api/account/profile/', account_profile, name='api_account_profile'),
]
