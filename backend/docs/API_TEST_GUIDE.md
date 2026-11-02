# API test guide

## 1. Start MySQL

You need a running MySQL Server (or compatible MariaDB server). MySQL Workbench by itself is only a client; it does not start the database server.

## 2. Create a local database and application user

Open MySQL Workbench and connect using a MySQL administrator account. Open and run [LOCAL_MYSQL_SETUP.sql](LOCAL_MYSQL_SETUP.sql).

Before running it, replace `REPLACE_WITH_A_STRONG_LOCAL_PASSWORD` with a password you choose. Use the same password in the backend `.env` file.

The script creates:
- Database: `evacuation_center_db`
- Application user: `evac_app` connecting from `127.0.0.1`
- Permissions limited to the `evacuation_center_db` database

## 3. Configure and start the API

In the `backend/` directory:

1. Copy `.env.example` to `.env`.
2. Set `DB_USER=evac_app`.
3. Set `DB_PASSWORD` to the password used in the SQL script.
4. Keep `DB_HOST=127.0.0.1` and `DB_PORT=3306`, unless your local MySQL server uses a different port.
5. Run `npm install`.
6. Run `npm test`.
7. Run `npm start`.

The server should report that it connected to MySQL, synchronized the model, and is listening on port 4000.

## 4. Import the Postman collection

Import `../postman/Evac-Backend.postman_collection.json` into Postman after starting the API.

Suggested sequence:

1. Run **Health check**. Expect HTTP 200 and `{ "status": "ok" }`.
2. Run **Register user** with a new email. Expect HTTP 201 and a response containing `id`, `name`, `date`, `email`, and `createdAt`. No password or password hash should appear.
3. Run **Login user** with the same email. Expect HTTP 200.
4. Change the password in the login request. Expect HTTP 401.
5. Try registering the same email again. Expect HTTP 409.
6. Try a malformed date or short password. Expect HTTP 400.

This collection was created during reconstruction for the portfolio adaptation. It is not an original OJT artifact and should not be presented as a recovered 2024 Postman collection.

## 5. Verify password handling in MySQL

The Sequelize model uses the historical `password` column to store a bcrypt hash. It does not store the original password in the portfolio reconstruction.

You can confirm that a row was created with a non-plaintext hash by inspecting the `Users` table in MySQL Workbench. Do not copy real passwords or password hashes into screenshots, issue reports, or public documentation.

## Troubleshooting

- **ECONNREFUSED:** MySQL Server is not running, or the host/port is incorrect.
- **Access denied:** Check `DB_USER`, `DB_PASSWORD`, and the MySQL account host (`127.0.0.1`).
- **Unknown database:** Run the SQL setup script.
- **Port 4000 already in use:** Stop the other process or set a different `PORT` in `.env`.
- **Duplicate email:** Use a different test email or remove the previous test row from your local test database.

These steps test the reconstructed API locally. They do not prove that the historical 2024 code was production-ready.
