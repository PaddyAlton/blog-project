blog-project
============

This is a demo project based on a [RealPython tutorial](https://realpython.com/python-django-blog/).

The idea is to serve a Blog, using Django + GraphQL for the backend and VueJS for the frontend.

Fire it up
----------

### Backend

Backend dependencies are managed via `pipenv`. Navigate to `blog-project/backend` and use `pipenv install` to create a virtual environment with the dependencies installed. Then use the convenience script `pipenv run serve` to start the backend (Django) server.

Visit

- `http://127.0.0.1:8000/admin` for the Django admin
- `http://127.0.0.1:8000/graphql` for the GraphQL interface

### Frontend

Frontend dependencies are managed via `npm`. Navigate to `blog-project/frontend` and use `npm install` to set things up. Then use the convenience script `npm run serve` to start the frontend (VueJS) server.

Visit `http://127.0.0.1:8080/` for the Blog homepage.
