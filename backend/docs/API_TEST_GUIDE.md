# API test guide

Import `../postman/Evac-Backend.postman_collection.json` into Postman after starting the API.

Suggested sequence:

1. Run **Health check**. Expect HTTP 200 and `{ "status": "ok" }`.
2. Run **Register user** with a new email. Expect HTTP 201 and a response containing `id`, `name`, `date`, `email`, and `createdAt`. No password or password hash should appear.
3. Run **Login user** with the same email and password. Expect HTTP 200.
4. Change the password in the login request. Expect HTTP 401.
5. Try registering the same email again. Expect HTTP 409.
6. Try a malformed date or short password. Expect HTTP 400.

This collection was created during reconstruction for the portfolio adaptation. It is not an original OJT artifact and should not be presented as a recovered 2024 Postman collection.
