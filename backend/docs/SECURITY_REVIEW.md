# Security review of the reconstructed API

## Improvements made in this portfolio adaptation

| Area | Historical prototype | Portfolio adaptation |
|---|---|---|
| Password storage | Plaintext password column | `bcryptjs` hash stored in the existing password column |
| API responses | Could return the complete User model | Explicit safe user fields only |
| Database credentials | Hardcoded local connection details | `.env` configuration; `.env` is ignored by Git |
| Input validation | Minimal required-field checks | Name, date, email, and password validation |
| Error messages | Could return raw database/ORM error text | Generic client-facing messages; details logged server-side |
| OAuth | Incomplete Passport integration with a hardcoded credential | Excluded from this version |

## Important remaining limitations

- The login endpoint does not issue a session or token and does not protect subsequent routes.
- The default Sequelize development `sync()` behavior is retained for this small demo. Use reviewed migrations for a deployed system.
- A production deployment needs HTTPS, rate limiting, appropriate CORS policy if frontend/backend origins differ, monitoring, and a deliberate session/token strategy.
- Existing rows with plaintext passwords are incompatible with the reconstructed hash-checking login. Start with a fresh local database; do not silently convert or reuse old account data.

## Historical credential action

The original OAuth client secret appears in the recovered Git history. Treat it as exposed. Rotate/revoke it at the identity provider if it is still active. A new clean repository cannot undo a credential exposure in a remote repository's old history.
