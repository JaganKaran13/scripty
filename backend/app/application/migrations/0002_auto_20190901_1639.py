# Generated by Django 2.2.4 on 2019-09-01 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='application_dependency',
            field=models.CharField(max_length=200, null=True),
        ),
    ]