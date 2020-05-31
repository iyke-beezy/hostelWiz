# Generated by Django 2.2 on 2020-05-31 19:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20200531_1836'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='property',
            name='saved',
        ),
        migrations.AddField(
            model_name='saved',
            name='property',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, to='api.Property'),
            preserve_default=False,
        ),
    ]
