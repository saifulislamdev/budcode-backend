# API Endpoints

All endpoints that are covered in our REST API are listed here with supporting information.

Note: All routes are prefixed by `/api`.

| Link                                                | Prefix            | Endpoint                                                  | Frontend Component/Page        | Status |
| --------------------------------------------------- | ----------------- | --------------------------------------------------------- | ------------------------------ | ------ |
| [🔗](#post-authsignin)                              | `/auth/`          | POST `/auth/signin`                                       | Sign in                        | ✅     |
| [🔗](#post-authsignup)                              |                   | POST `/auth/signup`                                       | Sign up                        | ✅     |
| [🔗](#get-usersid)                                  | `/users/`         | GET `/users/:id`                                          | Profile page                   | ✅     |
| [🔗](#get-userscreatedprojects)                     | `/users/`         | GET `/users/createdProjects`                              | Member approval                  | ✅     |
| [🔗](#put-usersid)                                  |                   | PUT `/users/:id`                                          | Profile page                   | ✅     |
| [🔗](#get-projects)                                 | `/projects/`      | GET `/projects`                                           | Project search and suggestions | ✅     |
| [🔗](#get-projectsid)                               |                   | GET `/projects/:id`                                       | Project page                   | ✅     |
| [🔗](#get-projectsfilters)                          |                   | GET `/projects/filters`                                   | Project search and suggestions | ✅     |
| [🔗](#get-projectsskillvalue1tagvalue2searchvalue3) |                   | GET `/projects?skill[]=value1&tag[]=value2&search=value3` | Project search and suggestions | ✅     |
| [🔗](#get-projectssuggestions)                      |                   | GET `/projects/suggestions`                               | Project search and suggestions | ✅     |
| [🔗](#get-projectsidrequests)                       |                   | GET `/projects/:id/requests`                              | Member approval                | ✅     |
| [🔗](#post-projects)                                | `/projects/`      | POST `/projects`                                          | Project creation               | ✅     |
| [🔗](#post-projectsidrequests)                      |                   | POST `/projects/:id/requests`                             | Member approval                | ✅     |
| [🔗](#post-projectsidfollow)                        |                   | POST `/projects/:id/follow`                               | Project page                   | ✅     |
| [🔗](#post-projectsidupdates)                       |                   | POST `/projects/:id/updates`                              | Feed page                      |        |
| [🔗](#put-projectsid)                               |                   | PUT `/projects/:id`                                       | Project page                   | ✅     |
| [🔗](#delete-projectsrequestsid)                    |                   | DELETE `/projects/requests/:id`                           | Member approval                | ✅     |
| [🔗](#get-notificationsuserid)                      | `/notifications/` | GET `/notifications/user/:id`                             | Notification system            | ✅     |
| [🔗](#get-updates)                                  | `/updates/`       | GET `/updates`                                            | Feed page                      |        |
| [🔗](#post-ratings)                                 | `/ratings/`       | POST `/ratings`                                           | Ratings and reviews            | ✅     |

Frontend components/pages that use Saiful's ([@saifulislamdev](https://github.com/saifulislamdev)) endpoints:

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

`username` \[required]  
`password` \[required]  
`email` \[required]  
`firstName` \[required]  
`lastName`  
`gender`  
`links`: links in the form of an array of objects as shown below

```json
[
    {
        "type": "GitHub",
        "link": "https://github.com/johndoe"
    },
    {
        "type": "LinkedIn",
        "link": "https://www.linkedin.com/in/johndoe/"
    }
]
```

`interests`: users' interests in the form of an array (e.g. ["full stack development", "frontend", "backend", "crypto"])  
`skills`: users' skills in the form of an array (e.g. ["HTML", "CSS"])

### Result

If successful, results in `201` status code and message. Otherwise, results in a `400` or `500` error status code with a message about the error.

## GET `/users/:id`

### Description

Get user profile info (and ratings)

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: ID of user

### Result

If successful, results in `200` status code and profile info in the form of key-value pairs. 

`projectMemberships` contains projects that the user is a part of currently or was in the past.

Be mindful that the `visitingUserMutualProjects` property may not always exist (that is, the key won't exist). It exists when the token is valid. When the token is invalid or there is not one given, the property won't exist. Another thing to be mindful about is that the value will be an empty array when the token is valid but the visiting user has no mutual projects.

Otherwise, results in a `500` error status code with a message about the error.

## GET `/users/createdProjects`

### Description

Get projects a user has created

### Header

`authorization`: token

### Result

If successful, results in `200` status code and an array containing objects with some info of all projects in the form of key-value pairs. Otherwise, results in a `500` error status code with a message about the error.

For retrieving full info about a project, refer to [GET /projects/:id endpoint](#get-projectsid)

## PUT `/users/:id`

### Description

Edit user profile info

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: username of the profile being edited

### Body Parameters

If any of these values are not passed in, the value will remain the same. If any value is provided, the old value will be replaced ENTIRELY (the old value will be reset and set to new value that you provide).

`firstName`  
`lastName`  
`email`  
`bio`: Short bio of the user  
`occupation`: User's occupation  
`gender`  
`links`: links in the form of an array of objects as shown below:

```json
[
    {
        "type": "GitHub",
        "link": "https://github.com/johndoe"
    },
    {
        "type": "LinkedIn",
        "link": "https://www.linkedin.com/in/johndoe/"
    }
]
```

`interests`: users' interests in the form of an array (e.g. ["full stack development", "frontend", "backend", "crypto"])  
`skills`: users' skills in the form of an array (e.g. ["HTML", "CSS"])

## Results

If successful, results in `204` status code. Otherwise, results in a `400`, `401`, or `500` error status code with a message about the error.

## GET `/projects`

### Description

Get info of all projects

## Result

If successful, results in `200` status code and an array containing objects with the info of all projects in the form of key-value pairs. Otherwise, results in a `500` error status code with a message about the error.

Each object in the array represents a project and contains the following values:

`id`  
`name`  
`description`  
`creator`  
`status`  
`created_at`  
`skills`  
`tags`

## GET `/projects/:id`

### Description

Get information about a project (basic info, skills, tags, members, updates, etc.)

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: ID of project

### Result

If successful, results in `200` status code and project info in the form of key-value pairs. Otherwise, results in a `400` or `500` error status code with a message about the error.

## GET `/projects/filters`

### Description

Get all filters that users can use to filter search

### Result

If successful, results in `200` status code and an an object containing the filters associated with all existing projects. Otherwise, results in a `400` or `500` error status code with a message about the error.

The returned object contains two properties, `skills` and `tags`. Each property's value is an array of objects that have a respective `skill` or `tag` property containing the name of the filter, and a `count` property containing the number of existing projects associated with the filter.

## GET `/projects?skill[]=value1&tag[]=value2&search=value3`

### Description

Get projects by searching with filters and keywords

### Usage

Multiple filters can be specified with repetition of query parameters. For example:

```
/projects?skill[]=c%2B%2B&skill[]=python&tag[]=food&search=restaurant+reviews
```

### Result

If successful, results in `200` status code and an array containing objects with the info of all projects matching the filtering criteria in the form of key-value pairs. Otherwise, results in a `500` error status code with a message about the error.

Returned projects are returned in the same format as those returned by the [GET /projects endpoint](#get-projects).

Returned projects are guaranteed to be associated with all specified skills and tags. If a `search` value is provided, returned projects are also guaranteed to contain at least one of the search terms in the project name.

## GET `/projects/suggestions`

### Description

Get project suggestions for a user

### Header

`authorization`: token (if exists)

### Result

If successful, results in `200` status code and an array containing objects with the info of projects matching the user's skills and interests. Otherwise, results in a `401` or `500` error status code with a message about the error.

Returned projects are returned in the same format as those returned by the [GET /projects endpoint](#get-projects), but with each project having the additional properties of `matchingSkills`, an array containing the skills associated with the project that match with the user's skills, and `tagAffinity`, an integer between 0 and 100 representing the percentage of project tags that match with the user's interests.

Returned projects are guaranteed to be associated with at least one of the user's skills or interests.

## GET `/projects/:id/requests`

### Description

Get all project join/membership requests with the ID of project

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: ID of project

### Result

If successful, results in `200` status code and member requests in JSON. Otherwise, results in a `401` or `500` error status code with a message about the error.

## POST `/projects`

### Description

Create new project

### Headers

`authorization`: token (if exists)

### Body Parameters

`name`: project name  
`description`: project description  
`skills`: project skills in the form of an array (e.g. ["HTML", "CSS"])  
`tags`: project tags in the form of an array (e.g. ["web application", "collaboration"])  
`links` (optional): links in the form of an array of objects as shown below

```json
[
    {
        "type": "GitHub",
        "link": "https://github.com/saifulislamdev/budcode-backend"
    },
    {
        "type": "Frontend deployment",
        "link": "https://budcode.netlify.app/"
    }
]
```

### Result

If successful, results in `201` status code with success message. Otherwise, results in a `400`, `401`, or `500` error status code with a message about the error.

## POST `/projects/:id/requests`

### Description

User request to join a project

### Headers

`authorization`: token (if exists)  
`Content-Type`: `application/json`

### Route Parameters

`id`: ID of project

### Body Parameters

`message`: Message that the user sends when requesting to join the project

### Result

If successful, results in `201` status code with success message. Otherwise, results in a `400`, `401`, or `500` error status code with a message about the error.

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

Create a new project update for a project with the project ID

### Header

`authorization`: token (if exists)

### Route Parameters

`id`: ID of project

### Body Parameters

`subject`: subject/title of update  
`body`: body of update

### Result

If successful, results in `201` status code with success message. Otherwise, results in a `400`, `401`, or `500` error status code with a message about the error.

## PUT `/projects/:id`

### Description

Edit project info, change status of project (e.g. to complete), and remove project members

### Header

`authorization`: token (if exists)  
`Content-Type`: `application/json`

### Route Parameters

`id`: ID of project

### Body Parameters

If any of these values are not passed in, the value will remain the same. If any value is provided, the old value will be replaced ENTIRELY (the old value will be reset and set to new value that you provide).

`name`: project name  
`description`: project description  
`links`: links in the form of an array of objects as shown below

```json
[
    {
        "type": "GitHub",
        "link": "https://github.com/saifulislamdev/budcode-backend"
    },
    {
        "type": "Frontend deployment",
        "link": "https://budcode.netlify.app/"
    }
]
```

`status`: project status ("In Progress" or "Complete")  
`skills`: project skills in the form of an array (e.g. ["HTML", "CSS"])  
`tags`: project tags in the form of an array (e.g. ["web application", "collaboration"])  
`members`: project members in the form of an array (e.g. ["johndoe", "janedoe"]) so any member not listed is essentially removed/kicked from the project

### Result

If successful, results in `204` status code. Otherwise, results in a `400`, `401`, or `500` error status code with a message about the error.

## DELETE `/projects/requests/:id`

### Description

Approve/reject request to join a project (requesting user is notified)

### Header

`authorization`: token (if exists)  
`Content-Type`: `application/json`

### Route Parameters

`id`: ID of join request

### Body Parameters

`decision`: Boolean that specifies whether the join request is accepted or denied (`true` = accepted, `false` = denied)

### Result

If successful, results in `204` status code. Otherwise, results in a `400`, `401`, or `500` error status code with a message about the error.

## GET `/notifications/user/:id`

### Description

Get all notifications for a user

### Header

`authorization`: token (if exists)  
`Content-Type`: `application/json`

### Route Parameters

`id`: username of user whose notifications you are trying to obtain

### Result

If successful, results in `200` status code and an array containing objects where each object contains information about a specific notification. Otherwise, results in a `401` or `500` error status code with a message about the error.

The user associated with the token should match the user specified by `id`. Otherwise, it will result in a `401` error status code.

## GET `/updates`

### Description

Get project updates for a user that they view on their feed

### Header

`authorization`: token

### Result

If successful, results in `200` status code and an array containing objects with the updates from the projects the user follows in the form of key-value pairs, ordered from newest to oldest. Otherwise, results in a `401` or `500` error status code with a message about the error.

Each object in the array represents a project update and contains the following values:

`id`  
`project_id`  
`project_name`  
`subject`  
`body`  
`author`  
`time_posted`

## POST `/ratings/`

### Description

New rating for a user (rated user is notified)

### Body Parameters

`authorization`: token (if exists)  
`reviewed_username`: user being reviewed  
`subject`: subject of review  
`body`: body of review

### Result

If successful, results in `201` status code with success message. Otherwise, results in a `401`, `403`, or `500` error status code with a message about the error.
