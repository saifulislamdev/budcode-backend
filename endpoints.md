# API Endpoints

All endpoints that are covered in our REST API are listed here with supporting information.

Note: All routes are prefixed by `/api/`.

| Prefix            | Endpoint                                      | Frontend Component/Page        | Status |
| ----------------- | --------------------------------------------- | ------------------------------ | ------ |
| `/auth/`          | POST `/auth/signin`                           | Sign in                        | ✅     |
|                   | POST `/auth/signup`                           | Sign up                        | ✅     |
| `/users/`         | GET `/users/:id`                              | Profile page                   |        |
|                   | POST `/users/:id`                             | Sign up                        |        |
|                   | PUT `/users/:id`                              | Profile page                   |        |
| `/projects/`      | GET `/projects`                               | Project search and suggestions |        |
|                   | GET `/projects/:id`                           | Project page                   | ✅     |
|                   | GET `/projects/filters`                       | Project search and suggestions |        |
|                   | GET `/projects?filter1=value1&filter2=value2` | Project search and suggestions |        |
|                   | GET `/projects/suggestions/:id`               | Project search and suggestions |        |
|                   | GET `/projects/:id/requests`                  | Member approval                |        |
|                   | POST `/projects`                              | Project creation               |        |
|                   | POST `/projects/:id/requests`                 | Member approval                |        |
|                   | POST `/projects/:id/follow`                   | Project page                   | ✅     |
|                   | POST `/projects/:id/updates`                  | Feed page                      |        |
|                   | PUT `/projects/:id`                           | Project page                   |        |
|                   | DELETE `/projects/:id`                        | Project page                   |        |
|                   | DELETE `/projects/:id/requests/`              | Member approval                |        |
| `/notifications/` | GET `/notifications/user/:id`                 | Notification system            |        |
| `/updates/`       | GET `/updates/user/:id`                       | Feed page                      |        |
| `/ratings/`       | POST `/ratings/`                              | Ratings and reviews            |        |

Frontend components/pages that use Saiful's (@saifulislamdev) endpoints:

-   Member approval
-   Notification system
-   Profile page
-   Project page
-   Sign in
-   Sign up

Frontend components/pages that use Abdul's endpoints:

-   Feed page
-   Project creation
-   Project search and suggestions
-   Ratings and reviews

## POST `/auth/signin`

### Description

Sign in

### Body Parameters

`username`  
`password`

### Result

If successful, results in `201` status code, token (JWT), and message. Otherwise, results in a `400` or `500` error status code with a message about the error.

## POST `/auth/signup`

### Description

Sign up

### Body Parameters

`username`  
`password`  
`email`  
`firstName`  
`lastName`  
`gender`

### Result

If successful, results in `201` status code and message. Otherwise, results in a `400` or `500` error status code with a message about the error.

## GET `/users/:id`

### Description

Get user profile info (and ratings)

### Route Parameters

`id`: ID of user

### Result

If successful, results in `200` status code and profile info in the form of key-value pairs. Otherwise, results in a `400` or `500` error status code with a message about the error.

## POST `/users/:id`

### Description

Create user profile

## PUT `/users/:id`

### Description

Edit user profile info

## GET `/projects`

### Description

Get info of all projects

## GET `/projects/:id`

### Description

Get information about a project (basic info, skills, tags, members, updates, etc.)

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: ID of project

### Result

If successful, results in `200` status code and project info in the form of key-value pairs. Otherwise, results in a `400` or `500` error status code with a message about the error.

### Description

Get info of project with ID of project

## GET `/projects/filters`

### Description

Get all filters that users can use to filter search

## GET `/projects?filter1=value1&filter2=value2`

### Description

Get projects by searching with filters

## GET `/projects/suggestions/:id`

### Description

Get project suggestions for a user

## GET `/projects/:id/requests`

### Description

Get all project requests with the ID of project

## POST `/projects`

### Description

Create new project

## POST `/projects/:id/requests`

### Description

User request to join a project with the IDs of project and requesting user (project creator is notified)

## POST `/projects/:id/follow`

### Description

User follows a project

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: ID of project

### Result

If successful, results in `201` status code with success message. Otherwise, results in a `400` or `500` error status code with a message about the error.

## POST `/projects/:id/updates`

### Description

Create new project update for a project with the project ID

## PUT `/projects/:id`

### Description

Edit project info (and remove members)

## DELETE `/projects/:id`

### Description

Mark a project as completed or discontinued

## DELETE `/projects/:id/requests/`

### Description

Approve/reject request to join a project (requesting user is notified)

## GET `/notifications/:id`

### Description

Get all notifications for a user

## GET `/updates/user/:id`

### Description

Get project updates for a user

## POST `/ratings/`

### Description

New rating for a user with an ID of ratedUserId (rated user is notified)
