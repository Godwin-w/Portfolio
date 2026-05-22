from django.urls import path
from . import views

app_name = 'portfolio_web'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('projects/', views.projects, name='projects'),
    path('skills/', views.skills, name='skills'),
    path('coding-profiles/', views.coding_profiles, name='coding_profiles'),
    path('contact/', views.contact, name='contact'),
    path('test-skills/', views.test_skills, name='test_skills'),
]