from django.contrib import admin
from .models import Project, Skill, CodingProfile, ContactMessage

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'technologies', 'created_at', 'order']
    list_editable = ['order']
    search_fields = ['title', 'description']
    list_filter = ['created_at']

class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'percentage', 'order']
    list_editable = ['percentage', 'order']
    list_filter = ['category']
    search_fields = ['name']

class CodingProfileAdmin(admin.ModelAdmin):
    list_display = ['platform', 'username', 'order']
    list_editable = ['order']
    list_filter = ['platform']
    search_fields = ['username']

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_editable = ['is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject']

# Register all models
admin.site.register(Project, ProjectAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(CodingProfile, CodingProfileAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)