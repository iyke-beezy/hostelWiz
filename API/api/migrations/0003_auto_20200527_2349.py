# Generated by Django 2.2 on 2020-05-27 23:49

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200527_2217'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyimage',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=api.models.upload_path),
        ),
    ]
