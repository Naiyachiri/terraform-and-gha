from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProjectListSerializer
from .models import ProjectList

# Create your views here.

class ProjectListView(viewsets.ModelViewSet):
    serializer_class = ProjectListSerializer
    queryset = ProjectList.objects.all()
