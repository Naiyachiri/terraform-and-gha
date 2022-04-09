from django.contrib import admin
from .models import ProjectList

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(ProjectList, TodoAdmin)
