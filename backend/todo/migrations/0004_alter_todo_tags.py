# Generated by Django 4.0.3 on 2022-04-09 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_alter_todo_project_url_alter_todo_tags_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='tags',
            field=models.ManyToManyField(blank=True, to='todo.todo'),
        ),
    ]
