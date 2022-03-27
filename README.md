# BudCode Backend

This is the backend service for the BudCode project. The project is created with the PERN stack (PostgreSQL, Express, React, and Node). The backend service was developed by Abdul Imtiaz and Saiful Islam for our Spring 2022 CSc 59867 Senior Design Project II course at The City College of New York.

## Context

There is a lack of access for resume builders (e.g., college students, new grads) and any level developer to gain experience working in software development group environments. Not everyone has the network to work with others, so finding new people to work with will help all parties grow and gain more experience. This will also help these developers in landing job opportunities due to how important previous projects are for employers, especially projects done in team environments.

BudCode is an online platform that allows software developers, at any level (novice students to seasoned professionals), to collaborate. BudCode allows innovators to look for team members by posting their project ideas along with relevant information about the project (description, requirements, keywords, etc.) to the website. The platform provides more features that aim to serve as interest points for developers, such as personalized project recommendations, recruiting potential team members, and much more.

## Setup

### Clone the repository

```bash
git clone https://github.com/saifulislamdev/budcode-backend
```

### Setup required technologies
Install [Node.js](https://nodejs.org/) and setup [PostgreSQL](https://www.postgresql.org/about/) database

### Install dependencies

Run the following to install the dependencies

```bash
npm i
```

### Setup env file

Create a `.env` file in the root of the repository with the following environment variables.

```bash
# Port Number for API
# value shown is default
PORT=5000

# Database config
PGHOST=YOUR_DATABASE_HOST_HERE
PGUSER=YOUR_DATABASE_USERNAME_HERE
PGDATABASE=YOUR_DATABASE_NAME_HERE

# not needed if there is no password
PGPASS=YOUR_DATABASE_PASSWORD_HERE

# not needed if you don't find necessary
PGPORT=YOUR_DATABASE_PORT_HERE

JWT_SECRET=YOUR_SECRET_HERE
```

### Run server

Run `npm run dev` or `npm run start` (refer to [Available Scripts](##Available-Scripts) section for instructions)

## Repo Structure

All of the source code will be found in `src` folder.
`/src/app.js` is the entry point of the application.

### Helper functions

Write any helper functions that can be reused in other places in `src/helpers` folder

### Utility functions

Write any utility functions in `src/utils` folder

### Database functions

Write table creation statements in `src/models` folder

### REST Routes

#### Existing routes

All endpoints that are covered in our REST API are listed in `/endpoints.md` with information about each endpoint.

#### Creating new routes

In the `/src/routes/index.js` file, import your controllers and mount each controller to a specific route such as `/auth`. Keep in mind that all routes defined in `/src/routes/index.js` is automatically prefixed by `/api/` (as indicated in `/src/app.js`)

Create a route file in `/src/routes` for each controller in `/src/routes/controllers` that will consist of the REST methods covered in the controller.

-   Write the middlewares for these routes in `src/routes/middlewares` folder.
-   Name a GET middleware as getModelName
-   Name a POST middleware as createModelName
-   Name a PUT/PATCH middleware as updateModelName
-   Name a DELETE middleware as deleteModelName

## Available Scripts

### `npm run dev`

Starts a nodemon server that watches changes to your JavaScript code and refresh the server without having to run node command after each change.

It should print `Server started on port 5000` and `Database connected` if everything ran correctly.

### `npm run start`

Starts a node server of the application.

It should print `Server started on port 5000` and `Database connected` if everything ran correctly.

To make code changes and view the changes on the server without having to rerun this script after each change, refer to the `npm run dev` script.
