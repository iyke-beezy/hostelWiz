# Generated by Django 2.2 on 2020-04-06 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_adminuser_customer_hostelmanager_property_rating_room'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='name',
            field=models.CharField(max_length=32, null=True, unique=True),
        ),
    ]
