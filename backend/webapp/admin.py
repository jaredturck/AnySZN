from django.contrib import admin
from .models import ContactUs, Article, FAQ, Basket, Contact, Country, Address, Customer, Payment, Order, Category, Brand, Product, PasswordReset

@admin.register(ContactUs)
class ContactUsAdmin(admin.ModelAdmin):
    list_display = ['email', 'subject', 'country', 'ip_address', 'created']
    list_filter = ['country', 'created']
    search_fields = ['email', 'subject', 'message', 'ip_address']
    readonly_fields = ['created', 'user_agent']
    ordering = ['-created']

    fieldsets = [
        ('Contact information', {'fields': ['name', 'title', 'gender', 'email', 'country', 'ip_address']}),
        ('Message', {'fields': ['subject', 'message']}),
        ('Meta', {'fields': ['user_agent', 'created'], 'classes': []}),
    ]

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'tag', 'created']
    list_filter = ['tag', 'created']
    search_fields = ['title', 'summary', 'description']
    readonly_fields = ['created']
    ordering = ['-created']

    fieldsets = [
        ('Article', {'fields': ['title', 'tag']}),
        ('Content', {'fields': ['summary', 'description', 'display']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'display', 'ordering', 'created']
    list_filter = ['display', 'created']
    search_fields = ['question', 'answer']
    readonly_fields = ['created']
    ordering = ['ordering', '-created']

    fieldsets = [
        ('Question & Answer', {'fields': ['question', 'answer']}),
        ('Display options', {'fields': ['display', 'ordering']}),
        ('Meta', {'fields': ['created'],'classes': []}),
    ]

@admin.register(Basket)
class BasketAdmin(admin.ModelAdmin):
    list_display = ['id', 'product', 'quantity', 'discount', 'created']
    list_filter = ['product', 'created']
    search_fields = ['product__name']
    readonly_fields = ['created']
    ordering = ['id']

    fieldsets = [
        ('Basket item', {'fields': ['product', 'quantity', 'discount']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'phone', 'is_active', 'user', 'created']
    list_filter = ['last_name', 'is_active', 'created']
    search_fields = ['first_name', 'last_name', 'email', 'phone']
    readonly_fields = ['created', 'user']
    ordering = ['last_name', 'first_name']

    fieldsets = [
        ('Name', {'fields': ['first_name', 'last_name']}),
        ('Contact details', {'fields': ['email', 'phone']}),
        ('Status', {'fields': ['is_active']}),
        ('Meta', {'fields': ['user', 'created'], 'classes': []}),
    ]

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ['country_name', 'region', 'created']
    list_filter = ['region', 'created']
    search_fields = ['country_name']
    readonly_fields = ['created']
    ordering = ['country_name']

    fieldsets = [
        (None, {'fields': ['country_name', 'region']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ['address_line_1', 'city', 'postcode', 'country', 'created']
    list_filter = ['country', 'city', 'created']
    search_fields = ['address_line_1', 'address_line_2', 'apartment', 'city', 'postcode']
    readonly_fields = ['created']
    ordering = ['country', 'city', 'address_line_1']

    fieldsets = [
        ('Address', {'fields': ['country','address_line_1','address_line_2','apartment']}),
        ('Location', {'fields': ['city', 'postcode']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['id', 'contact', 'auth_user', 'address', 'created']
    list_filter = ['address__country', 'created']
    search_fields = ['contact__first_name','contact__last_name','auth_user__username','auth_user__email']
    readonly_fields = ['created']
    ordering = ['id']

    fieldsets = [
        ('Related objects', {'fields': ['contact', 'auth_user', 'address']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ['type']
    list_filter = ['type']
    search_fields = ['type']
    ordering = ['type']

    fieldsets = [
        (None, {'fields': ['type'],}),
    ]

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer', 'basket', 'payment', 'created']
    list_filter = ['created', 'payment__type']
    search_fields = ['customer__contact__first_name','customer__contact__last_name','customer__auth_user__username']
    readonly_fields = ['created']
    ordering = ['-created']

    fieldsets = [
        ('Order links', {'fields': ['customer', 'basket', 'payment']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'primary_category', 'gender', 'created']
    list_filter = ['primary_category', 'gender', 'created']
    search_fields = ['name', 'primary_category']
    readonly_fields = ['created']
    ordering = ['name']

    fieldsets = [
        (None, {'fields': ['name', 'primary_category', 'gender'],}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['name', 'website_url', 'gender', 'created']
    list_filter = ['gender', 'created']
    search_fields = ['name', 'website_url']
    readonly_fields = ['created']
    ordering = ['name']

    fieldsets = [
        (None, {'fields': ['name', 'website_url', 'gender']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'category', 'gender', 'created']
    list_filter = ['brand', 'category', 'gender', 'created']
    search_fields = ['name', 'description']
    readonly_fields = ['created']
    ordering = ['name']

    fieldsets = [
        ('Basic info', {'fields': ['name', 'brand', 'category', 'gender']}),
        ('Description', {'fields': ['description']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]

@admin.register(PasswordReset)
class PasswordResetAdmin(admin.ModelAdmin):
    list_display = ['id', 'reset_url', 'valid_for', 'created']
    list_filter = ['created']
    search_fields = ['reset_url']
    readonly_fields = ['created']
    ordering = ['-created']

    fieldsets = [
        ('Reset', {'fields': ['reset_url', 'valid_for']}),
        ('Meta', {'fields': ['created'], 'classes': []}),
    ]
