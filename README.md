# SCRIPTY


![images](https://user-images.githubusercontent.com/32727177/63958043-317aee80-caa7-11e9-91a2-d1198c0a6bcf.png)


## Web Application for generating a script file based on the user specifications

### BACKEND:

Django REST API Framework is used as a backend which provides REST API endpoints.

**To create a new app**
>docker-compose run --rm app sh -c "python manage.py startapp <app_name>"

**To check the Unit Test and Syntax Error**
>docker-compose run --rm app sh -c "python manage.py test && flake8"

**To apply Migrations**
>docker-compose run --rm app sh -c "python manage.py makemigrations"

**Spinup the Project:**
>docker-compose up

Postgresql is used as Database.
