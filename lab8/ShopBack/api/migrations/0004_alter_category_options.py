# Generated by Django 5.0.3 on 2024-04-02 12:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_product_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'Categories'},
        ),
    ]
