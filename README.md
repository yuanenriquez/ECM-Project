# Evacuation Center Management System

A collaborative academic project developed during on-the-job training. This repository preserves the frontend project as submitted and adds a separately documented backend reconstruction under [`backend/`](backend/).

## Backend reconstruction

The `backend/` directory contains a later portfolio adaptation of the registration/login backend recovered from my 2024 OJT project files. I prepared this version with AI assistance, using the recovered source as the starting point. It is not a verbatim restoration of the 2024 code, and the improvements made for this portfolio should not be confused with my original OJT work.

The reconstruction includes environment-based database configuration, password hashing, safer API responses, input validation, tests for the validation utilities, a Postman collection, and setup documentation. The local MySQL connection and full HTTP flows still need to be tested before treating the API as runnable.

See:

- [`backend/README.md`](backend/README.md) for setup and API instructions.
- [`backend/CONTRIBUTIONS.md`](backend/CONTRIBUTIONS.md) for my OJT contribution notes and the boundary between historical work and portfolio-preparation changes.
- [`backend/docs/RECONSTRUCTION_NOTES.md`](backend/docs/RECONSTRUCTION_NOTES.md) for the version comparison.
- [`backend/docs/RECOVERED_GIT_HISTORY.md`](backend/docs/RECOVERED_GIT_HISTORY.md) for the original 2024 commit inventory.
- [`backend/docs/SECURITY_REVIEW.md`](backend/docs/SECURITY_REVIEW.md) for security changes and remaining limitations.
- [`backend/docs/API_TEST_GUIDE.md`](backend/docs/API_TEST_GUIDE.md) for local testing steps.

## Historical backend development record

The original private [`Evac` repository](https://github.com/yuanenriquez/Evac) preserves the original source and six-commit history. The public [`Evac-OJT-Backend`](https://github.com/yuanenriquez/Evac-OJT-Backend) repository presents a sanitized copy of that historical project and its six-commit development record. The university email and historical OAuth credentials are excluded from the public copy.

The two repositories have different purposes: `Evac-OJT-Backend` shows the recovered 2024 project history, while this repository's `backend/` directory presents a later AI-assisted portfolio reconstruction with documented security improvements.

## Project attribution

This was a team project. My OJT role focused on backend development; the original repository also contains frontend files and shared project material. I am not claiming sole authorship of the full Evacuation Center Management application.

## Review status

The reconstruction includes automated input-validation tests. They do not replace running the API against a locally configured MySQL instance and testing the HTTP endpoints with Postman. Full local integration testing is still pending.
