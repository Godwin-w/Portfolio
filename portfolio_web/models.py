from django.db import models
from django.utils import timezone

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    technologies = models.CharField(max_length=500, help_text="Comma-separated technologies")
    github_link = models.URLField(max_length=500, blank=True)
    live_demo_link = models.URLField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['order', '-created_at']

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming Languages'),
        ('frameworks', 'Frameworks & Libraries'),
        ('tools', 'Tools & Technologies'),
    ]
    
    name = models.CharField(max_length=100, help_text="Skill name (e.g., Python, Django, Git)")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='programming')
    percentage = models.IntegerField(help_text="Skill proficiency percentage (0-100)", default=50)
    icon_class = models.CharField(max_length=100, blank=True, help_text="Font Awesome icon class (e.g., fab fa-python)")
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} - {self.get_category_display()} ({self.percentage}%)"
    
    class Meta:
        ordering = ['category', 'order', 'name']

class CodingProfile(models.Model):
    PLATFORM_CHOICES = [
        ('github', 'GitHub'),
        ('leetcode', 'LeetCode'),
        ('hackerrank', 'HackerRank'),
        ('codechef', 'CodeChef'),
    ]
    
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    username = models.CharField(max_length=200)
    profile_url = models.URLField(max_length=500)
    icon_class = models.CharField(max_length=100, default='fab fa-github')
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.get_platform_display()} - {self.username}"
    
    class Meta:
        ordering = ['order']

class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=300)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.subject}"
    
    class Meta:
        ordering = ['-created_at']

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming Languages'),
        ('frameworks', 'Frameworks & Libraries'),
        ('tools', 'Tools & Technologies'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='programming')
    percentage = models.IntegerField(default=50)
    icon_class = models.CharField(max_length=100, blank=True)
    order = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        # Ensure category is always one of the valid values
        if self.category not in ['programming', 'frameworks', 'tools']:
            # Map display names to actual values
            if self.category == 'Programming Languages':
                self.category = 'programming'
            elif self.category == 'Frameworks & Libraries':
                self.category = 'frameworks'
            elif self.category == 'Tools & Technologies':
                self.category = 'tools'
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.get_category_display()} ({self.percentage}%)"
    
    class Meta:
        ordering = ['category', 'order', 'name']