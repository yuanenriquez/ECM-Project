# Recovered 2024 Git history

## Source and scope

This inventory was prepared from the original `Evac` Git repository and the `.git` directory recovered in my `Evac.zip` archive. The original private repository is now accessible at [`yuanenriquez/Evac`](https://github.com/yuanenriquez/Evac), and its `main` history confirms the six commits listed below.

The six commits below are the commits on the recovered `main` branch. Git stash objects are listed separately and are not counted as ordinary branch commits.

## Recovered branch commits

| Short SHA | Date (local Git metadata) | Commit message | What the commit contains |
|---|---|---|---|
| `1aac832` | 2024-08-01 | `FIrst commit, working database` | Initial Express server, Sequelize/MySQL configuration, User model, registration/login routes, and frontend files. |
| `4fd151a` | 2024-08-01 | `space only` | Adds `auth.js` with an initial Passport Google OAuth strategy using placeholder credentials. |
| `8f13708` | 2024-08-04 | `added gitignore` | Adds `.gitignore`, updates server/dependency configuration, and adjusts authentication setup. |
| `6eb3cf6` | 2024-08-04 | `updated gitignore` | Revises ignored files and repository hygiene rules. |
| `4b63cad` | 2024-08-05 | `add client ID and client secret` | Replaces the OAuth placeholders with a literal Google OAuth client ID and client secret in `auth.js`. **The credential is intentionally omitted from this document. Treat it as exposed and revoke/rotate it if still active.** |
| `b3b2288` | 2024-08-13 | `first commit` | Adds a small README file. |

All six commits record the author and committer name `Yuan Haley Enriquez` and the same Batangas State University email address in the recovered Git metadata. This is useful historical attribution evidence, but Git author metadata by itself is not cryptographic proof of who physically wrote each line.

## Recovered stash state

The archive also contains `refs/stash`:

- Stash commit: `ccefeb6` — `WIP on Integrating-Google-log-in: 1aac832 FIrst commit, working database`
- Stash index commit: `e950bc0` — `index on Integrating-Google-log-in: 1aac832 FIrst commit, working database`

The stash contains working-tree/index state affecting `auth.js`, `package-lock.json`, `package.json`, and `server.js`. These are Git stash internals, not two additional commits on the recovered `main` branch and should not be counted as completed commits.

## Publication caution

The August 5 commit contains a real OAuth secret. Do not push the recovered history unchanged to a public repository. A sanitized reconstruction can retain the original author names, dates, and commit messages, but any commit whose content is changed will receive a new SHA. The current portfolio branch intentionally does not import the old `.git` directory or its historical credentials.


## Sanitized public portfolio copy

A sanitized public copy of this historical backend Git history is published at [`yuanenriquez/Evac-OJT-Backend`](https://github.com/yuanenriquez/Evac-OJT-Backend). The public copy preserves the six original commit dates, messages, author name, and order, but replaces the university email with the contributor's GitHub-provided `noreply` address and redacts the historical OAuth credentials. All six public commit hashes therefore differ from the private originals.

The public repository also adds a later README/commit-map documentation commit. The original private `yuanenriquez/Evac` repository is kept unchanged as the historical source.
