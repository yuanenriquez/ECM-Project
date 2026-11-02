# Contribution and authorship notes

## Project context

I worked on the backend portion of a collaborative academic Evacuation Center Management project during my 162-hour OJT in 2024. This document describes the backend work visible in the recovered source and separates it from the wider team's work and from changes made later for this portfolio.

## Evidence in the recovered Git history

The original `Evac` repository and the Git history recovered from my project archive contain six commits under my Git author identity, with dates from July 31 to August 13, 2024. The commit messages and file changes show work on:

- The initial Express server and application baseline.
- Sequelize initialization and MySQL configuration.
- The Sequelize `User` model.
- Registration and login API endpoints.
- An experimental Passport / Google OAuth integration.
- Dependency, configuration, and `.gitignore` updates.

The [recovered history inventory](docs/RECOVERED_GIT_HISTORY.md) lists the original commit IDs, dates, and messages. Git author metadata is supporting evidence of the development history; because this was a team project, it should not be read as a claim that I built every part of the full application.

## Project completion and deployment context

The project was a local academic prototype. I did not deploy it as a public production website. The overall application was still incomplete at submission, but it met the academic OJT project requirement. This portfolio documents the backend work I handled without presenting the whole application as production-ready.

## Backend work visible in the recovered source

The August 1 baseline contains code for:

- An Express server.
- Sequelize initialization and a MySQL connection.
- A `User` model with name, date, email, and password fields.
- `POST /register` and `POST /login` endpoints.
- Basic request validation and HTTP success/error responses.
- Static serving of the project's frontend directory.

The later Google OAuth experiment contains Passport strategy and session-related code. It is not included in the reconstructed backend because the strategy did not align with the recovered `User` model and the historical source contained a hardcoded credential.

## Tools I used during OJT

I also used:

- **Postman** to send HTTP requests and inspect API responses.
- **Browser Developer Tools**, including Elements, Styles, Console, and Network, to inspect the web page and troubleshoot frontend/application behavior.

These are experiences I remember using during OJT. The recovered archives did not contain a saved Postman collection or request history, so they are not independently demonstrated by the repository files.

## Changes made during portfolio preparation

The backend in this repository is a later reconstruction, not a verbatim copy of the 2024 implementation. The following changes were made during portfolio preparation:

- Moved database connection details to environment variables.
- Added password hashing with `bcryptjs`.
- Prevented password hashes from being returned in API responses.
- Added stricter request validation and safer error responses.
- Removed the incomplete Google OAuth implementation and historical OAuth credentials.
- Added a focused README, input-validation tests, and a new Postman collection.

These are portfolio-preparation changes. They should not be described as features I implemented during the original OJT.
