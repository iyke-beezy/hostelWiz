# Generated by Django 2.2 on 2020-04-05 20:58

import api.models
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HostelManager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact', models.CharField(max_length=32)),
                ('subscriptionType', models.CharField(max_length=32)),
                ('status', models.BooleanField(default=False)),
                ('startDate', models.DateTimeField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=32)),
                ('location', models.CharField(max_length=32)),
                ('numberOfRooms', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('status', models.BooleanField(default=False)),
                ('type', models.CharField(max_length=32)),
                ('pictureLocation', models.ImageField(blank=True, null=True, upload_to=api.models.upload_path)),
                ('managerId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.HostelManager')),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roomNo', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('roomType', models.CharField(max_length=32)),
                ('roomAvailable', models.BooleanField(default=False)),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Property')),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact', models.CharField(max_length=32)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='AdminUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact', models.CharField(max_length=32)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stars', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Property')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'property')},
                'index_together': {('user', 'property')},
            },
        ),
    ]
