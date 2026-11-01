# Evacuation Center Management — Backend Reconstruction

This repository is a **portfolio-prepared reconstruction** of the backend work recovered from a 2024 academic Evacuation Center Management project. It is based on the most coherent email/password API version found in the supplied `Evac.zip` and `Sequelize.zip` archives.

It is not the untouched original source code, and it is not represented as a production-ready system. Security and maintainability changes made while preparing this portfolio version are documented below.

## Project context

The academic project was a team-developed Evacuation Center Management application. The recovered backend baseline used Node.js, Express, Sequelize, and MySQL. Its API included user registration and login endpoints, and the frontend sent JSON requests to those endpoints.

The reconstructed repository focuses on that backend API. It does not claim that every planned feature of the wider team application was completed.

## Technology stack

- Node.js and Express
- Sequelize ORM
- MySQL through `mysql2`
- `bcryptjs` for password hashing
- `dotenv` for local configuration
- Postman collection for exercising the reconstructed API

## Requirements

- Node.js 18 or newer
- MySQL 8 or a compatible MySQL server
- npm

## Setup

1. Create a local MySQL database named `evacuation_center_db` (or choose another name in `.env`).
2. Copy `.env.example` to `.env`.
3. Set `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, and `DB_PORT` to match your local MySQL configuration.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the API:

   ```bash
   npm start
   ```

6. Check that the API is running:

   ```text
   GET http://localhost:4000/health
   ```

The server authenticates to MySQL and synchronizes the Sequelize model before listening. The project uses `sequelize.sync()` for this small academic demonstration; a production application should use reviewed database migrations.

## API endpoints

### `GET /health`

Returns a simple service-health response.

### `POST /register`

Request body:

```json
{
  "name": "Test User",
  "date": "2001-02-28",
  "email": "test.user@example.com",
  "password": "ChangeThisPassword123"
}
```

Creates a user and returns a safe user object. The original password is hashed before storage and is never returned in the response.

### `POST /login`

Request body:

```json
{
  "email": "test.user@example.com",
  "password": "ChangeThisPassword123"
}
```

Checks the supplied password against the stored hash and returns a success response with a safe user object. Invalid credentials receive HTTP 401.

Import `postman/Evac-Backend.postman_collection.json` into Postman to try the endpoints. The collection was created for this reconstructed version; it was not recovered from the original OJT workspace.

## Tests

Run the built-in Node.js tests for the input-validation helpers:

```bash
npm test
```

These tests do not require a live MySQL database. They are not end-to-end tests of the database or HTTP routes.

## Scope and known limitations

- This reconstruction covers registration and login API behavior. It does not implement the full evacuation-center dashboard or resident-management workflow.
- Login returns a successful response but does not create a persistent login session, JWT, or protected-route authorization. Do not use it as a complete authentication system for a deployed product.
- Google OAuth was deliberately excluded. The recovered OAuth experiment was inconsistent with the recovered User model and included a hardcoded client secret in historical files. That credential must be revoked/rotated if it is still active.
- Existing accounts containing plaintext passwords from the old prototype will not authenticate against this hash-based reconstruction. Use a fresh local database for this portfolio version.
- No live MySQL connection test was possible during archive reconstruction. The code and validation unit tests should be run locally before publishing.

## Attribution

This is a reconstructed backend portfolio artifact from a collaborative academic project. The recovered Git history contains commits authored under Yuan Haley Enriquez's Git author identity. See [CONTRIBUTIONS.md](CONTRIBUTIONS.md) and [docs/RECONSTRUCTION_NOTES.md](docs/RECONSTRUCTION_NOTES.md) for the evidence and boundaries of attribution.

The new repository is intentionally separate from the original archives and does not include their `.git` history, historical credentials, or unrelated experimental snapshots.
