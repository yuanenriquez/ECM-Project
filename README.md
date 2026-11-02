# Evacuation Center Management System

A collaborative academic project developed during on-the-job training. This repository preserves the frontend project as submitted and adds a separately documented backend reconstruction under [`backend/`](backend/).

## Backend reconstruction

The `backend/` directory contains a portfolio-prepared reconstruction based on the most coherent Express/Sequelize/MySQL backend version recovered from the contributor's 2024 project archives.

**Important:** this is not a verbatim restoration of the original backend. It preserves the original API's registration/login purpose while applying documented security and maintainability changes during portfolio preparation. See:

- [`backend/README.md`](backend/README.md) for setup and API instructions.
- [`backend/CONTRIBUTIONS.md`](backend/CONTRIBUTIONS.md) for the attribution boundaries and evidence.
- [`backend/docs/RECONSTRUCTION_NOTES.md`](backend/docs/RECONSTRUCTION_NOTES.md) for the version comparison.
- [`backend/docs/RECOVERED_GIT_HISTORY.md`](backend/docs/RECOVERED_GIT_HISTORY.md) for the original 2024 commit inventory.
- [`backend/docs/SECURITY_REVIEW.md`](backend/docs/SECURITY_REVIEW.md) for security changes and remaining limitations.

## Historical backend development record

The original private [`Evac` repository](https://github.com/yuanenriquez/Evac) preserves the original source and six-commit history. The public [`Evac-OJT-Backend`](https://github.com/yuanenriquez/Evac-OJT-Backend) repository now presents a sanitized copy of that historical project and its six-commit development record. The university email and historical OAuth credentials are excluded from the public copy.

The two repositories have different purposes: `Evac-OJT-Backend` shows the recovered 2024 project history, while this repository's `backend/` directory presents a later portfolio reconstruction with documented security improvements.

## Attribution

This was a team project. The existing frontend and this backend reconstruction should not be presented as the work of one person alone. The backend contribution notes distinguish recovered Git-authored work from later portfolio-preparation changes and from experience reported by the contributor.

## Review status

The reconstructed backend's input-validation tests are included. They do not replace running the API against a locally configured MySQL instance and testing the HTTP endpoints with Postman. See [`backend/docs/API_TEST_GUIDE.md`](backend/docs/API_TEST_GUIDE.md).
