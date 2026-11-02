# Recovered 2024 Git history

## Source and scope

I recovered this inventory from my original `Evac` Git repository and the `.git` directory in my `Evac.zip` archive. My original private repository is available at [`yuanenriquez/Evac`](https://github.com/yuanenriquez/Evac), and its `main` history confirms the six commits listed below.

The six commits below are the commits on my recovered `main` branch. I list Git stash objects separately because they are work-in-progress records, not additional ordinary commits.

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

My recovered archive also contains `refs/stash`:

- Stash commit: `ccefeb6` — `WIP on Integrating-Google-log-in: 1aac832 FIrst commit, working database`
- Stash index commit: `e950bc0` — `index on Integrating-Google-log-in: 1aac832 FIrst commit, working database`

The stash contains working-tree/index state affecting `auth.js`, `package-lock.json`, `package.json`, and `server.js`. These are Git stash internals, not two additional commits on my recovered `main` branch, so I do not count them as completed commits.

## Publication caution

The August 5 commit contained a real OAuth secret. I did not push the original history unchanged to the public repository. The sanitized copy retains my author name, original dates, and commit messages, but its commit IDs differ because I removed the secret and replaced the email metadata. I also kept the original private repository unchanged.


## Sanitized public portfolio copy

I published a sanitized copy of this backend history at [`yuanenriquez/Evac-OJT-Backend`](https://github.com/yuanenriquez/Evac-OJT-Backend). It preserves my six original commit dates, messages, author name, and order, while replacing my university email with my GitHub-provided `noreply` address and redacting the historical OAuth credentials. All six public commit hashes therefore differ from my private originals.

The public repository also adds a later README/commit-map documentation commit. I kept my original private `yuanenriquez/Evac` repository unchanged as the historical source.
