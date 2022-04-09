from rest_framework import serializers
from .models import Todo

# This module is responsible for converting our models to JSON so the front end can use it

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed', 'project_url', 'thumbnail_url', 'tags')
