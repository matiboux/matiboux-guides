---
title: GitHub repositories
---

## Create repository

_TODO_


## Configure repository

### Branches

The default branch should be `main` by default.

The primary branches are those used across development, deployment, and release processes.
The primary branches in a repository could be:
- `main`: tracks production-ready code.
- `staging`: tracks code ready for testing and validation.
- `dev`: tracks code from completed development work.
- `release/*`: tracks code for a specific release.

All primary branches should be protected to prevent direct commits and enforce use of pull requests to propose changes and allow for code reviews.

Then, the secondary branches are those used for active development and feature branches.
The secondary branches in a repository could be:
- `feat/*`: tracks code for a specific feature development.
- `fix/*`: tracks code for a specific bug fix.
- `hotfix/*`: tracks code in the context of a hotfix (may be proposed directly to `main` or `staging`).
- `ref/*`: tracks code for refactoring.
- `test/*`: tracks code for updates to tests.
- `doc/*`: tracks code for documentation updates.

The secondary branches are used by developers in their active development work.
They should be used to propose changes to the primary branches through pull requests.
Most of them should be first merged into the `dev` branch, to ensure proper integration and testing.

After a bunch of changes are merged into the `dev` branch and are deemed production-ready, they can be merged into the higher-level primary branches. For example, from `dev` into `staging`, then later from `staging` into `main`.

### Settings

- Pull Requests:
  - ✅ Enable `Allow merge commits`: Use merge commits to merge pull requests between primary branches and preserve all commit history between the primary branches.
  - ✅ Enable `Allow squash merging`: Use squash commits to merge pull requests between secondary branches and primary branches to keep the commit history clean. To keep the commit history meaningful, ensure the feature branches are atomic and makes changes for a well-defined purpose.
  - ❎ Disable `Allow rebase merging`.

<span></span>

- ✅ Enable `Always suggest updating pull request branches`

<span></span>

- ✅ Enable `Allow auto-merge`

<span></span>

- ✅ Enable `Automatically delete head branches`

<span></span>

- ✅ Enable `Limit how many branches and tags can be updated in a single push`


## Use repository

_TODO_
