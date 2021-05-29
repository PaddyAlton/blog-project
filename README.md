blog-project
============

This is a demo project based on a [RealPython tutorial](https://realpython.com/python-django-blog/).

The idea is to serve a Blog, using Django + GraphQL for the backend and VueJS for the frontend.

Fire it up
----------

### Backend

Backend dependencies are managed via `pipenv`. Navigate to `blog-project/backend` and use `pipenv install` to create a virtual environment with the dependencies installed.

The remote repository is missing the SQLite database Django creates when you initially start it, so there are some extra steps when starting from scratch. If this is the case, run the following convenience scripts:

1. `pipenv run migrate`
2. `pipenv run createsuperuser`

In either case, you should then use the convenience script `pipenv run serve` to start the backend (Django) server.

Visit

- `http://127.0.0.1:8000/admin` for the Django admin (use your superuser name and password to log in)
- `http://127.0.0.1:8000/graphql` for the GraphQL interface

### Frontend

Frontend dependencies are managed via `npm`. Navigate to `blog-project/frontend` and use `npm install` to set things up. Then use the convenience script `npm run serve` to start the frontend (VueJS) server.

Visit `http://127.0.0.1:8080/` for the Blog homepage.
