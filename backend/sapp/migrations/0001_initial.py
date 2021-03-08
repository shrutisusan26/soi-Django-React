# Generated by Django 3.0.5 on 2021-03-08 16:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('login', '0002_startup'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('profile_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='login.Startup')),
                ('place', models.CharField(max_length=100)),
                ('tags', models.CharField(max_length=100)),
                ('logo_url', models.CharField(max_length=100)),
            ],
        ),
    ]
