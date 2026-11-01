# Contribution and authorship notes

## Project context

The Evacuation Center Management application was a collaborative academic project. This document describes the parts of the recovered work that can reasonably be attributed to Yuan Haley Enriquez, while avoiding claims of sole ownership of the entire application.

## Evidence in the recovered Git history

The supplied `Evac.zip` contains a Git repository whose `main` history records six commits under the author identity associated with Yuan Haley Enriquez. The recorded dates span August 1–13, 2024. The full short-SHA inventory, commit messages, stash distinction, and publication cautions are documented in [RECOVERED_GIT_HISTORY.md](docs/RECOVERED_GIT_HISTORY.md). The commits include:

- An initial backend and application baseline containing `server.js`, `config.js`, Sequelize model/configuration files, and the web UI assets.
- Addition of Passport/Google OAuth integration code.
- Dependency and `.gitignore` changes.
- An OAuth client configuration change.
- A README file addition.

The Git metadata is useful evidence of authored work, but author metadata is not cryptographic proof of who physically typed every line. The academic project should continue to be described as collaborative.

## Project completion and deployment context

The contributor recalls that the application was used as a local academic prototype during OJT and was not deployed as a public production website. The contributor also recalls that the wider application remained incomplete at submission, although it met the academic project requirement. This is contributor recollection, not independently verified deployment telemetry.

This portfolio should therefore describe the work as backend development on an academic prototype. It should not claim that the full Evacuation Center Management System was completed, deployed, or used by external customers.

## Backend work supported by the recovered source

The August 1 baseline contains code for:

- An Express server.
- Sequelize initialization and a MySQL connection.
- A `User` model with name, date, email, and password fields.
- `POST /register` and `POST /login` endpoints.
- Basic request validation and HTTP success/error responses.
- Static serving of the project's frontend directory.

The later Google OAuth experiment contains Passport strategy and session-related code. It is excluded from this portfolio adaptation because the strategy did not align with the recovered User model and it contains a historical hardcoded credential.

## OJT tool experience reported by the contributor

The contributor also reports using the following during the 162-hour academic OJT:

- Postman to send HTTP requests and inspect API responses.
- Browser Developer Tools: Elements, Styles, Console, and Network panels.

The supplied archives did not contain a Postman collection or saved request history, so this tool use is a contributor-reported experience rather than something independently established by the recovered repository.

## Changes made during portfolio preparation

The current reconstruction is not a verbatim copy of the 2024 code. The following changes were made for safer demonstration:

- Moved database connection details to environment variables.
- Added password hashing with `bcryptjs`.
- Prevented password hashes from being returned in API responses.
- Added stricter request validation and safer error responses.
- Removed the incomplete Google OAuth implementation and all historical OAuth credentials.
- Added a focused README, tests for input validation, and a new Postman collection.

These are portfolio-preparation changes. They should not be described as features personally implemented during the original OJT unless independently confirmed.
