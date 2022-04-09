# Generated by Django 4.0.3 on 2022-04-09 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_todo_project_url_todo_tags_todo_thumbnail_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='project_url',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='tags',
            field=models.ManyToManyField(null=True, to='todo.todo'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='thumbnail_url',
            field=models.URLField(blank=True),
        ),
    ]