# Evacuation Center Management System

A collaborative academic project developed during on-the-job training. This repository preserves the frontend project as submitted and adds a separately documented backend reconstruction under [`backend/`](backend/).

## Backend reconstruction

The `backend/` directory contains a portfolio-prepared reconstruction based on the most coherent Express/Sequelize/MySQL backend version recovered from the contributor's 2024 project archives.

**Important:** this is not a verbatim restoration of the original backend. It preserves the original API's registration/login purpose while applying documented security and maintainability changes during portfolio preparation. See:

- [`backend/README.md`](backend/README.md) for setup and API instructions.
- [`backend/CONTRIBUTIONS.md`](backend/CONTRIBUTIONS.md) for the attribution boundaries and evidence.
- [`backend/docs/RECONSTRUCTION_NOTES.md`](backend/docs/RECONSTRUCTION_NOTES.md) for the version comparison.
- [`backend/docs/SECURITY_REVIEW.md`](backend/docs/SECURITY_REVIEW.md) for security changes and remaining limitations.

## Attribution

This was a team project. The existing frontend and this backend reconstruction should not be presented as the work of one person alone. The backend contribution notes distinguish recovered Git-authored work from later portfolio-preparation changes and from experience reported by the contributor.

## Review status

The reconstructed backend's input-validation tests are included. They do not replace running the API against a locally configured MySQL instance and testing the HTTP endpoints with Postman. See [`backend/docs/API_TEST_GUIDE.md`](backend/docs/API_TEST_GUIDE.md).
