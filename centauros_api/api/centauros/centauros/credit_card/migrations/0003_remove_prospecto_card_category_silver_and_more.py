# Generated by Django 5.1.1 on 2024-09-16 18:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('credit_card', '0002_rename_cambio_monto_q4_q1_prospecto_avg_open_to_buy_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prospecto',
            name='card_category_silver',
        ),
        migrations.RemoveField(
            model_name='prospecto',
            name='credit_limit',
        ),
    ]
