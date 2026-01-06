# ANYHJS
AnyHJS is an AI-powered fashion marketplace and styling platform that transforms outfit inspiration into instant, shoppable looks across many brands. Discover the latest on-trend outfits, see how they’d look in them through virtual try-ons, and instantly shop complete looks.

## Frontend
The frontend is built using react.js framework with typescript, the folder structure of `frontend/`:
- build/ - contains the compiled webapp for deployment
- public/ - contains index.html (react entry point) and some other core assets
- src/ - contains the full source code for the frontend, components, styling, static files, etc.

To build and run the frontend use:
```
cd frontend && npm run build
npm start
```

## Backend
The backend is built in Python Django framework, folder structure of `backend/`
- backend/ - contains settings, entry point urls, and wsgi config.
- webapp/ - contains all the backend logic, django admin pages, database models, urls, and views

to run the backend use:
```
python manage.py runserver
```
