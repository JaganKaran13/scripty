# Generated by Django 2.2.4 on 2019-09-03 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0003_auto_20190901_1641'),
    ]

    operations = [
        migrations.CreateModel(
            name='OperatingSystem',
            fields=[
                ('os_id', models.AutoField(primary_key=True, serialize=False)),
                ('os_name', models.CharField(max_length=20)),
            ],
        ),
    ]