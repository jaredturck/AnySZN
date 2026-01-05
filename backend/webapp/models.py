from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

ARTICLE_TAG_CHOICES = [
    ('news', 'News'),
    ('blog', 'Blog'),
    ('promo', 'Promotion'),
    ('trend_watch', 'Trend Watch'),
    ('collabs', 'Collabs'),
    ('sustainability', 'Sustainability'),
    ('sneakers', 'Sneakers'),
    ('product_updates', 'Product Updates'),
]

DISPLAY_CHOICES = [
    ('show', 'Show'),
    ('hide', 'Hide'),
]

PAYMENT_TYPE_CHOICES = [
    ('paypal', 'PayPal'),
    ('barclays', 'Barclays'),
    ('stripe', 'Stripe'),
]

GENDER_CHOICES = [
    ('mens', 'Mens'),
    ('womens', 'Womens'),
]

BRAND_GENDER_CHOICES = [
    ('mens', 'Mens'),
    ('womens', 'Womens'),
    ('unisex', 'Unisex'),
]

REGION_CHOICES = [
    (0, 'Europe'),
    (1, 'North America'),
    (2, 'Asia'),
    (3, 'Oceania'),
    (4, 'Middle East'),
    (5, 'South America'),
    (6, 'Central America'),
    (7, 'Caribbean'),
    (8, 'Africa'),
]

CONTACT_TITLE_CHOICES = [
    ("Mr", "Mr"),
    ("Mrs", "Mrs"),
    ("Ms", "Ms"),
    ("Mx", "Mx"),
    ("Dr", "Dr"),
]

CONTACT_GENDER_CHOICES = [
    ("female", "Female"),
    ("male", "Male"),
    ("nonbinary", "Non-binary"),
    ("other", "Other"),
]

class ContactUs(models.Model):
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    country = models.ForeignKey('Country', on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    user_agent = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = 'Contact us message'
        verbose_name_plural = 'Contact us messages'

    def __str__(self):
        return f'{self.email} - {self.subject}'

class Article(models.Model):
    tag = models.CharField(max_length=50, choices=ARTICLE_TAG_CHOICES)
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    summary = models.CharField(max_length=500)
    description = models.TextField()
    display = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

    def __str__(self):
        return self.title

class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    display = models.CharField(max_length=10, choices=DISPLAY_CHOICES, default='show')
    ordering = models.PositiveIntegerField()

    class Meta:
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'
        ordering = ['ordering', '-created']

    def __str__(self):
        return self.question

class Basket(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='baskets')
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    quantity = models.PositiveIntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Basket'
        verbose_name_plural = 'Baskets'

    def __str__(self):
        return f'Basket #{self.pk} - {self.product.name} x {self.quantity}'

class Contact(models.Model):
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='contacts')
    title = models.CharField(max_length=16, null=True, blank=True, choices=CONTACT_TITLE_CHOICES)
    gender = models.CharField(max_length=16, null=True, blank=True, choices=CONTACT_GENDER_CHOICES)

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'.strip()

class Country(models.Model):
    country_name = models.CharField(max_length=100)
    region = models.IntegerField(choices=REGION_CHOICES)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def __str__(self):
        return self.country_name

class Address(models.Model):
    country = models.ForeignKey(Country, on_delete=models.PROTECT, related_name='addresses')
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255, blank=True)
    apartment = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=100)
    postcode = models.CharField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Address'
        verbose_name_plural = 'Addresses'

    def __str__(self):
        base = f'{self.address_line_1}, {self.city}'
        return f'{base}, {self.country}'

class Customer(models.Model):
    address = models.ForeignKey(Address, on_delete=models.PROTECT, related_name='customers')
    contact = models.OneToOneField(Contact, on_delete=models.CASCADE, related_name='customer')
    auth_user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='customer_profile')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Customer'
        verbose_name_plural = 'Customers'

    def __str__(self):
        return f'Customer: {self.contact}'

class Payment(models.Model):
    type = models.CharField(max_length=50, choices=PAYMENT_TYPE_CHOICES)

    class Meta:
        verbose_name = 'Payment'
        verbose_name_plural = 'Payments'

    def __str__(self):
        return self.get_type_display()

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT, related_name='orders')
    basket = models.ForeignKey(Basket, on_delete=models.PROTECT, related_name='orders')
    payment = models.ForeignKey(Payment, on_delete=models.PROTECT, related_name='orders',)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
        ordering = ['-created']

    def __str__(self):
        return f'Order #{self.pk} for {self.customer}'

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    primary_category = models.CharField(max_length=100, blank=True, null=True)
    gender = models.CharField(max_length=10, choices=BRAND_GENDER_CHOICES)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class Brand(models.Model):
    name = models.CharField(max_length=100, unique=True)
    website_url = models.URLField(blank=True, null=True)
    gender = models.CharField(max_length=10, choices=BRAND_GENDER_CHOICES)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products')
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES,)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name

class PasswordReset(models.Model):
    reset_url = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    valid_for = models.PositiveIntegerField(help_text='Number of days from created')

    class Meta:
        verbose_name = 'Password reset'
        verbose_name_plural = 'Password resets'

    def __str__(self):
        return f'Password reset #{self.pk} (valid {self.valid_for} days)'
