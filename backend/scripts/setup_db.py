import os, sys
from pathlib import Path
import django, csv

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth.models import Group, Permission
from django.contrib.auth.models import User
from webapp.models import Brand, Category, Country, BRAND_GENDER_CHOICES, REGION_CHOICES, ARTICLE_TAG_CHOICES
from webapp.models import Article, FAQ, Contact
import datetime

class SetupDB:
    def __init__(self):
        self.data_path = '/home/jared/Documents/Dropdown Documents/AnyHJS/backend/scripts/'
    
    def add_groups(self):
        ''' Add groups to the database '''

        admin_group, _ = Group.objects.get_or_create(name='Admin')
        admin_group.permissions.set(Permission.objects.all())

        influencer_group, _ = Group.objects.get_or_create(name='Influencer')
        influencer_group.permissions.clear()

        marketplace_seller_group, _ = Group.objects.get_or_create(name='Marketplace Seller')
        marketplace_seller_group.permissions.clear()
    
    def add_users(self):
        ''' Add users to the database '''

        admins = [
            ['jared', 'Jared', 'Turck', 'AnyHJS1234!', True, True, 'jaredturck8@gmail.com'],
        ]

        for name, first_name, last_name, password, is_superuser, is_staff, email in admins:
            admin_user, _ = User.objects.get_or_create(username=name)
            admin_user.set_password(password)
            admin_user.is_superuser = is_superuser
            admin_user.is_staff = is_staff
            admin_user.email = email
            admin_user.first_name = first_name
            admin_user.last_name = last_name
            admin_user.save()
            admin_group = Group.objects.get(name='Admin')
            admin_user.groups.add(admin_group)
    
    def add_brands(self):
        ''' Add brands from CSV file to the database '''

        region_mapping = {v.lower() : k for k,v in dict(BRAND_GENDER_CHOICES).items()}
        with open(os.path.join(self.data_path, 'brands.txt'), 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                name, url, gender = row
                Brand.objects.get_or_create(name=name, website_url=url, gender=region_mapping[gender])
    
    def add_categories(self):
        ''' Add categories from CSV file to the database '''

        region_mapping = {v.lower() : k for k,v in dict(BRAND_GENDER_CHOICES).items()}
        with open(os.path.join(self.data_path, 'categories.txt'), 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                name, primary_category, gender = row
                Category.objects.get_or_create(name=name, primary_category=primary_category, gender=region_mapping[gender.lower()])
    
    def add_countries(self):
        ''' Add countries from CSV file to the database '''

        region_mapping = {v : k for k,v in dict(REGION_CHOICES).items()}
        with open(os.path.join(self.data_path, 'countries.txt'), 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                country_name, region = row
                Country.objects.get_or_create(country_name=country_name, region=region_mapping[region])
    
    def add_blog_articles(self):
        ''' Add blog articles from CSV file to the database '''
        
        tag_mapping = {v : k for k,v in dict(ARTICLE_TAG_CHOICES).items()}
        with open(os.path.join(self.data_path, 'blog_posts.txt'), 'r') as file:
            reader = csv.reader(file)
            for row in reversed(list(reader)):
                tag, created, title, summary, description = row
                dt_created = datetime.datetime.strptime(created, '%d %b %Y')
                Article.objects.get_or_create(tag = tag_mapping[tag], created = dt_created, title = title, summary = summary, description = description)
    
    def add_FAQs(self):
        ''' Add FAQs from CSV file to the database '''
        
        with open(os.path.join(self.data_path, 'faqs.txt'), 'r') as file:
            reader = csv.reader(file)
            for n,row in enumerate(reader):
                question, answer = row
                FAQ.objects.get_or_create(question = question, answer = answer, ordering = n+1)
    
    def add_contacts(self):
        ''' Add contacts from CSV file to the database '''
        
        user_jared = User.objects.get(username='jared')
        Contact.objects.get_or_create(first_name = 'Jared', last_name = 'Turck', email = 'jaredturck8@gmail.com', phone = None, user = user_jared)

if __name__ == '__main__':
    db = SetupDB()
    db.add_groups()
    db.add_users()
    db.add_brands()
    db.add_categories()
    db.add_countries()
    db.add_blog_articles()
    db.add_FAQs()
    db.add_contacts()
