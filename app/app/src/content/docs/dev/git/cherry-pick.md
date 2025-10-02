---
title: Git Cherry-pick
---

<!-- > **Summary:**  
> `git cherry-pick` is used to apply changes from specific commits onto your current branch.  
> This is helpful when you want to copy individual commits from one branch to another, without merging the entire branch.  
> Use cherry-pick for bug fixes, hotfixes, or when you need only selected changes from another branch. -->

Use the `git cherry-pick` command to apply changes from specific commits onto your current branch.


- See the official [`git cherry-pick` documentation](https://git-scm.com/docs/git-cherry-pick).


## Cherry-pick a single commit

To cherry-pick a commit, you need to know its commit hash.
You can find this by using the `git log` command or by looking at the commit history on GitHub.

Once you have the commit hash, you can cherry-pick it into your current branch with the following command:

```sh
git cherry-pick "<commit-hash>"
```

To cherry-pick changes from the commit, without creating the new commit automatically, you can use the `-n` (or `--no-commit`) option:

```sh
git cherry-pick -n "<commit-hash>"
```

Warning: It is recommended to avoid cherry-picking merge commits!
When you cherry-pick a merge commit, Git will ask you to specify the parent and may not apply changes as you expect.
See the [`git cherry-pick` documentation](https://git-scm.com/docs/git-cherry-pick) for more details.

### Resolving Conflicts

If you encounter conflicts during cherry-pick, Git will pause and mark the conflicted files.
You can see which files need attention with:

```sh
git status
```

Edit the conflicted files in your preferred code editor to resolve the issues,
then stage them and continue the cherry-pick process:

```sh
git add "<resolved-files>"
git cherry-pick --continue
```

If you want to cancel the cherry-pick process and return to the state before starting it, use:

```sh
git cherry-pick --abort
```


## Cherry-pick multiple commits

You can cherry-pick multiple commits by specifying their commit hashes one after another:

```sh
git cherry-pick "<commit-hash-1>" "<commit-hash-2>" "<commit-hash-3>"
```

You can cherry-pick a range of commits by specifying the start and end commit hashes, separated by two dots (`..`):

```sh
git cherry-pick "<start-commit-hash>"^.."<end-commit-hash>"
```

Using the caret (`^`) after the start commit hash includes the start commit in the range:
- `a..z` includes commits after `a` (e.g. `b`) up to and including `z`.
- `a^..z` includes commits from `a` up to and including `z`.


## Reset author in cherry-pick

By itself, `git cherry-pick` preserves the author name and date from the original commit.

To reset the author and use your own name and current date as you would with a normal commit,
you need to manually commit cherry-picked changes:

```sh
git cherry-pick -n "<commit-hash>"
git commit --no-edit --reset-author
```

To cherry-pick multiple commits without squashing them, repeat this process for each commit.

The following script automates this process for a range of commits, preserving each commit message but resetting the author name and date:

```sh
#!/bin/sh
for commit in $(git rev-list --reverse "<start-commit-hash>"^.."<end-commit-hash>"); do
  git cherry-pick -n "$commit"
  git commit -C "$commit" --no-edit --reset-author
done
```
