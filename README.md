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

### Install dependencies

Run the following to install the dependencies

```bash
npm i
```

### Setup env file

Create a `.env` file in the root of the repository with the following environment variables.

```bash
PORT=5000 # value shown is default
```

## Repo Structure

All of the source code will be found in `src` folder.
`/src/app.js` is the entry point of the application.

### Helper functions

Write any helper functions that can be reused in other places in `src/helpers` folder

### Utility functions

Write any utility functions in `src/utils` folder

### Database functions

Write functions associated with creating, reading, updating, and deleting tables in `src/models` folder

### REST Routes

In the `/src/routes/index.js` file, import your controllers and mount each controller to a specific route such as `/auth`. Keep in mind that all routes defined in `/src/routes/index.js` is automatically prefixed by `/api/` (as indicated in `/src/app.js`)

Create a route file in `/src/routes` for each controller in `/src/routes/controllers` that will consist of the REST methods covered in the controller.

-   Write the middlewares for these routes in `src/routes/middlewares` folder.
-   Name a GET middleware as getModelName
-   Name a POST middleware as createModelName
-   Name a PUT/PATCH middleware as updateModelName
-   Name a DELETE middleware as deleteModelName

## Available Scripts

### `npm run server`

Starts a nodemon server that watches changes to your JavaScript code and refresh the server without having to run node command after each change.

It should print `Server started on port 5000` and `Database connected` if everything ran correctly.

### `npm run start`

Starts a node server of the application.

It should print `Server started on port 5000` and `Database connected` if everything ran correctly.

To make code changes and view the changes on the server without having to rerun this script after each change, refer to the `npm run server` script.
