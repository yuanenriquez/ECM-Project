# Reconstruction notes and version comparison

## Selection decision

**Selected historical baseline:** `Evac.zip`, commit `1aac832` (August 1, 2024), cross-checked against `Sequelize.zip/Sequelize/Backup(Working)3/Evac` and `Sequelize.zip/Sequelize/Evac`.

These versions contain the most coherent match between the Express API, Sequelize User model, MySQL configuration, and the user registration/login form flow. The August 1 Git commit is especially useful because it appears in the recovered repository's author-attributed history.

## Version comparison

| Snapshot | Findings | Decision |
|---|---|---|
| `Evac.zip`, commit `1aac832` | Express server, Sequelize/MySQL, User model, registration/login endpoints, static frontend serving | Chosen historical baseline |
| `Sequelize/Backup(Working)3/Evac` and `Sequelize/Evac` | Same essential API flow as the baseline, with frontend integration and basic validation/logging | Cross-check/reference copy |
| `Sequelize/Backup(Working)` and `Backup(Working)2` | Earlier, simpler server; no static frontend serving, minimal validation, plaintext-password comparison | Earlier iteration |
| Later `Evac.zip` Passport/OAuth state | Adds Passport and Google OAuth, but User model lacks the `googleId` attribute and OAuth account creation omits required User fields; credentials are hardcoded | Excluded |
| `Sequelize/Evacuation Center Management/Backend` | Bcrypt controller refactor, but model exports a Sequelize instance while server/controller destructure `{ sequelize }` / `{ User }`; the User model requires `date` but registration does not supply it | Incomplete refactor |
| `Sequelize/sequelize-setup` | Includes migrations, separate credential/info models, and bcrypt-related routes; routes query email/password fields not present in the shown `InfoEvacuee` model; startup/sync ordering is weak | Experimental / inconsistent |

## Historical baseline limitations

The original email/password code is a prototype, not a safe production authentication implementation:

- Passwords are stored and compared as plaintext.
- The registration endpoint returns the created model object, which can include the password field.
- Database credentials are hardcoded in the local configuration.
- The login endpoint does not create a persistent session or token.
- The server begins listening independently of the database sync promise.

## Portfolio adaptation changes

This repository keeps the same core API purpose and input fields, while adding:

- Environment-based database settings.
- Bcrypt-compatible password hashing.
- Safe response shaping.
- Input validation and consistent error responses.
- A new Postman collection and unit tests for input validation.

The API's login response still does not establish a persistent session or token. A future iteration could add session management or token-based authentication with protected routes, after choosing and documenting an appropriate deployment model.

## Credential handling

The recovered Git history includes a Google OAuth client secret in a historical commit. The secret is not reproduced here. Removing it from a new repository does not invalidate the old credential. Revoke/rotate it in the relevant Google Cloud project if it remains active. The new repository intentionally starts without the old `.git` directory so it does not carry historical secrets forward.
