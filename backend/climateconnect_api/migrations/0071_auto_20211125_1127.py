# Generated by Django 2.2.24 on 2021-11-25 11:27

import climateconnect_api.models.badge
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('climateconnect_api', '0070_badge_donorbadge'),
    ]

    operations = [
        migrations.AlterField(
            model_name='badge',
            name='image',
            field=models.FileField(blank=True, help_text='Points to the image of the badge', null=True, upload_to=climateconnect_api.models.badge.badge_image_path, validators=[django.core.validators.FileExtensionValidator(['svg'])], verbose_name='Badge Image'),
        ),
    ]
