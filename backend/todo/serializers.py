from rest_framework import serializers
from .models import ProjectList

# This module is responsible for converting our models to JSON so the front end can use it

class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectList
        fields = ('id', 'title', 'description', 'completed', 'project_url', 'thumbnail_url', 'tags')
