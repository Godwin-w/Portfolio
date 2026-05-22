from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from django.http import JsonResponse
from .models import Project, Skill, CodingProfile
from .forms import ContactForm


def home(request):
    return render(request, 'portfolio_web/home.html')

def about(request):
    return render(request, 'portfolio_web/about.html')

def projects(request):
    projects = Project.objects.all()
    return render(request, 'portfolio_web/projects.html', {'projects': projects})

def skills(request):
    # Get skills by category
    programming_skills = Skill.objects.filter(category='programming')
    frameworks_skills = Skill.objects.filter(category='frameworks')
    tools_skills = Skill.objects.filter(category='tools')
    
    # Debug print to terminal
    print("=" * 50)
    print(f"Programming skills: {programming_skills.count()}")
    print(f"Frameworks skills: {frameworks_skills.count()}")
    print(f"Tools skills: {tools_skills.count()}")
    print("=" * 50)
    
    context = {
        'programming_skills': programming_skills,
        'frameworks_skills': frameworks_skills,
        'tools_skills': tools_skills,
    }
    return render(request, 'portfolio_web/skills.html', context)
def coding_profiles(request):
    profiles = CodingProfile.objects.all()
    return render(request, 'portfolio_web/coding_profiles.html', {'profiles': profiles})

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact_message = form.save()
            
            # Send email
            try:
                send_mail(
                    subject=f"Portfolio Contact: {contact_message.subject}",
                    message=f"Name: {contact_message.name}\nEmail: {contact_message.email}\n\nMessage:\n{contact_message.message}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],
                    fail_silently=False,
                )
                messages.success(request, 'Thank you for your message! I will get back to you soon.')
            except Exception as e:
                messages.error(request, 'Sorry, there was an error sending your message. Please try again later.')
            
            return redirect('portfolio_web:contact')
    else:
        form = ContactForm()
    
    return render(request, 'portfolio_web/contact.html', {'form': form})

def test_skills(request):
    from django.http import JsonResponse
    skills = Skill.objects.all().values('name', 'category', 'percentage')
    return JsonResponse(list(skills), safe=False)


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # 1. Get the data from the form
            name = form.cleaned_data['name']
            user_email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            # 2. Format the email content
            full_message = f"You have a new message from {name} ({user_email}):\n\n{message}"

            # 3. Send the email
            try:
                send_mail(
                    subject,          # Subject line
                    full_message,    # The body of the email
                    'Godwinw40@gmail.com',  # From (Your Gmail)
                    ['Godwinw40@gmail.com'],  # To (Your Gmail)
                    fail_silently=False,
                )
                messages.success(request, 'Your message has been sent successfully!')
            except Exception as e:
                print(e)
                messages.error(request, f'Error: {e}')
            return redirect('portfolio_web:contact')
    else:
        form = ContactForm()
    
    return render(request, 'portfolio_web/contact.html', {'form': form})