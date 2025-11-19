---
title: Trim whitespaces in files
---

## Trim empty lines in files

To trim leading empty lines in a file, you can use the following `sed` command:

```bash
sed -i '/./,$!d' file.txt
```

To trim trailing empty lines in multiple files in a directory, you can chain `find` and `sed`
commands. For example, to trim trailing empty lines in all `.py` files in the current directory and
its subdirectories, you can use:

```bash
find . -type f -name '*.py' -exec sed -i '/./,$!d' {} +
```
