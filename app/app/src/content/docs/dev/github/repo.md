---
title: GitHub repositories
---

## Create repository

_TODO_


## Configure repository

### Repository branches

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

### Repository settings

This is the typical configuration I use in my GitHub repositories.

Under "Pull Requests":
- ✅ Enable `Allow merge commits`:
  - Use merge commits to merge between primary branches: e.g. from `dev` into `main`.
  - Preserves all commit history between branches.
  - 🔧 Set default commit message to `Pull request title`.
- ✅ Enable `Allow squash merging`:
  - Use squash commits to merge with secondary branches: e.g. from `feat/*` into `dev`.
  - Combines all feature branch commits into a single commit in the main history.
  - 🔧 Set default commit message to `Pull request title`.
- ❎ Disable `Allow rebase merging`.

<span></span>

- ✅ Enable `Always suggest updating pull request branches`
- ✅ Enable `Allow auto-merge`
- ✅ Enable `Automatically delete head branches`

Under "Archives":
- ❎ Disable `Include Git LFS objects in archives`

Under "Pushes":
- ✅ Enable `Limit how many branches and tags can be updated in a single push`
  - 🔧 Default is up to `5` branches and tags, `2` may be sufficient.


## Use repository

_TODO_
