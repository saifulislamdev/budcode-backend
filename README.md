# BudCode Backend

There is a lack of access for resume builders (e.g., college students, new grads) and any level developer to gain experience working in software development group environments. Not everyone has the network to work with others, so finding new people to work with will help all parties grow and gain more experience. This will also help these developers in landing job opportunities due to how important previous projects are for employers, especially projects done in a team environment.

BudCode is an online platform that allows software developers, at any level (novice students to seasoned professionals), to collaborate. BudCode allows innovators to look for team members by posting their project ideas along with relevant information about the project (description, requirements, keywords, etc.) to the website.

This is the backend service for the BudCode project. The project is created with the PERN stack (PostgreSQL, Express, React, and Node). It was developed by Abdul Imtiaz and Saiful Islam for our Spring 2022 Senior Design II course at The City College of New York.

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
`/src/server.js` is the entry point of the application.

### Helper functions

Write any helper functions that can be reused in other places in `src/helpers` folder

### Utility functions

Write any utility functions in `src/utils` folder

### Database functions

Write functions associated with creating, reading, updating, and deleting tables in `src/models` folder

### REST Routes

In the `server.js` file, import your routes from `src/routes` and structure the url as `/api/something`

Create a route file for each model that will consist of the REST methods.

-   Write the middlewares for these routes in `src/routes/middlewares` folder.
-   Name a POST middleware as createModelName
-   Name a GET middleware as getModelName
-   Name a PUT/PATCH middleware as updateModelName
-   Name a DELETE middleware as deleteModelName

## Available Scripts

### `npm run server`

Starts a nodemon server that watches changes to your JavaScript code and refresh the server without having to run node command after each change.

It should print `Server started on port 5000` and `Database connected` if everything ran correctly.

Run this script to make requests using Postman.

### `npm run start`

Starts a node server of the application.

It should print `Server started on port 5000` and `Database connected` if everything ran correctly.

To make code changes and view the changes on the server without having to rerun this script after each change, refer to the `npm run server` script.
