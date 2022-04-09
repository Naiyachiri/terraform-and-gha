from django.db import models

class ProjectList(models.Model):
    """Represents our Todo Application"""
    title = models.CharField(max_length=120, unique=True)
    # short blurb about the project
    description = models.TextField()
    # boolean field that will describe completion state of the project
    completed = models.BooleanField(default = False)
    # thumbnail_url will be used to server a static image of the project to viewers
    thumbnail_url = models.URLField(blank = True, null = True)
    # project_url is the url that will link viewers to a project
    project_url = models.URLField(blank = True, null = True)
    # tags will be used to allow users to query specific projects by similar tags
    # convert to many to many later for now we have a string as well
    tags = models.TextField(blank=True, default='')

    def _str_(self):
        return self.title
