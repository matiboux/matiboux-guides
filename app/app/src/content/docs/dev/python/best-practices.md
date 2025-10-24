---
title: Python Best Practices
---

Bonjour !


## Installation de son environnement

Aujourd'hui il est conseillé d'utiliser **Python 3.13 ou supérieur** !
Python 3.9 est obsolète depuis octobre 2025.
Vous pouvez suivre le statut des versions de Python sur le guide officiel :
[devguide.python.org/versions](https://devguide.python.org/versions/).

Vous pouvez installer Python via:
- Le site officiel : [python.org/downloads](https://www.python.org/downloads/)
- Le gestionnaire de paquets de votre système (ex: `apt`, `brew`, `choco`, etc.)
- Un gestionnaire de versions comme `pyenv` : [github.com/pyenv/pyenv](https://github.com/pyenv/pyenv)


## Démarrer un projet rapidement

La manière "basique" de démarrer un projet Python est de créer un dossier, avec deux fichiers :
`main.py` (le code source) et `requirements.txt` (la liste des dépendances).

C'est une bonne approche pour des scripts simples et des expérimentations rapides.
Cependant, pour des projets plus complexes ou visant la production, il est recommandé d'utiliser
des outils de gestion de projet et de packages comme `poetry` ou `uv`.

Mon préféré personnel est `uv` car il est léger, rapide et facile à utiliser tout en étant complet.

Pour installer `uv` :
- Référez-vous à la documentation officielle :
  [Installing uv](https://docs.astral.sh/uv/getting-started/installation/).
- Ou exécutez :
  ```sh
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

Si vous préférez, pour installer `poetry` :
- Référez-vous à la documentation officielle :
  [Poetry - Installation](https://python-poetry.org/docs/#installation).
- Ou exécutez :
  ```sh
  curl -sSL https://install.python-poetry.org | python3 -
  ```

Chacun met à disposition une commande de création de projet rapide.
Placez-vous dans le dossier de votre futur projet et exécutez l'une des commandes suivantes :
- (`uv`) : `uv init`  
  Commande rapide pour la création d'un projet avec une structure de base.
- (`poetry`) : `poetry init`  
  Commande interactive pour la création d'un fichier `pyproject.toml`.
- (`poetry`) : `poetry new .`  
  Commande pour la création d'une structure de projet de base dans le dossier courant.

:::note
Le reste de ce guide utilisera `uv` pour les exemples.
:::

Le fichier `pyproject.toml` est le fichier de configuration standard pour tous les projets
Python modernes. Il est compatible avec `uv`, `poetry` et la majorité des outils Python pour la
définition de votre projet, ses dépendances et ses configurations.


## Migration d'un requirements.txt vers uv

Si votre projet n'est pas vide et contient un fichier `requirements.txt`, vous pouvez facilement
migrer ses dépendances vers `pyproject.toml` avec l'aide de `uv` :

```sh
uv add -r requirements.txt
```


## Installation des dépendances

Pour installer une dépendance avec `uv` dans votre projet, par exemple `pandas`, exécutez la
commande suivante :

```sh
uv add pandas
```

`uv` va automatiquement identifier la dernière version stable de `pandas` et l'ajouter dans votre fichier
`pyproject.toml`, ainsi que l'installer dans un environnement virtuel créé automatiquement pour votre projet.

Si vous modifiez manuellement le fichier `pyproject.toml` ou essayez d'installer un projet existant,
exécutez la commande suivante pour installer toutes les dépendances listées dans `pyproject.toml` :

```sh
uv sync
```

Dans le développement de votre application, vous aurez proablablement besoin d'ajouter des outils
qui ne sont pas des dépendances nécessaires à l'exécution de votre application. Les gestionnaires
de packages modernes comme `uv` et `poetry` permettent de définir des dépendances de développement
distinctes des dépendances de production.

Pour installer une dépendance de développement avec `uv`, par exemple l'outil `pytest`,
exécutez la commande suivante :

```sh
uv add --dev pytest
```

Par défaut, l'installation des dépendances avec `uv sync` installe à la fois les dépendances
de production et de développement. Si vous souhaitez n'installer que les dépendances de
production, exécutez la commande suivante :

```sh
uv sync --no-dev
```

Enfin, vous aurez peut-être remarqué que `uv sync` entraîne la création d'un fichier `uv.lock`.
Ce fichier, dit "lockfile", contient la liste de toutes les dépendances de votre projet, avec
leurs versions exactes. Ce fichier est une source de vérité de dépendances testées et
fonctionnelles pour votre application.

Cela garantit que votre projet est reproductible et que les mêmes versions
des dépendances sont utilisées à chaque installation.
