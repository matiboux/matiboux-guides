---
title: Python Best Practices
---


## Installation de son environnement

Aujourd'hui il est conseillé d'utiliser **Python 3.13 ou supérieur** !
Python 3.9 est obsolète depuis octobre 2025.

Vous pouvez suivre le statut des versions de Python sur le guide officiel :
[devguide.python.org/versions](https://devguide.python.org/versions/).

Vous pouvez installer Python via:
- Le site officiel : [python.org/downloads](https://www.python.org/downloads/)
- Le gestionnaire de paquets de votre système (ex: `apt`, `brew`, `choco`, etc.)
- Un gestionnaire de versions comme `pyenv` : [github.com/pyenv/pyenv](https://github.com/pyenv/pyenv)


### Démarrage naïf d'un projet

La manière naïve de démarrer un projet Python est de créer un dossier, avec deux fichiers :
`main.py` (le code source) et `requirements.txt` (la liste des dépendances).

C'est une approche correcte pour la création de scripts simples et des expérimentations rapides.
Cependant, pour des projets plus complexes ou visant la production, il est recommandé d'utiliser
des outils de gestion de projet et de packages comme `poetry` ou `uv`.


## Outils de gestion de projet et dépendances

- `uv` ([Installing uv](https://docs.astral.sh/uv/getting-started/installation/)) :

  ```sh
  curl -LsSf https://astral.sh/uv/install.sh | sh
  source $HOME/.local/bin/env
  ```

  Initialisation d'un projet avec `uv init` (crée une structure de projet de base dans le dossier
  courant).

  _Plus d'informations sur `uv init` :_
  _[uv - Creating projects](https://docs.astral.sh/uv/concepts/projects/init/)._

- `poetry` ([Poetry - Installation](https://python-poetry.org/docs/#installation)) :

  ```sh
  curl -sSL https://install.python-poetry.org | python3 -
  ```

  Initialisation d'un projet avec `poetry init` (interactif et ne créé que le fichier
  `pyproject.toml`), ou `poetry new .` (créé une structure de projet de base dans le dossier
  courant).

Toutes ces commandes visent notamment à créer `pyproject.toml`, le fichier de configuration
standard pour les projets Python modernes. Ce fichier définit votre projet, ses dépendances et les
configurations des outils qui l'accompagnent.

:::note
Le reste de ce guide utilisera `uv` pour les exemples.
:::


## Installation de dépendances

Si vous souhaitez importer vos dépendances depuis un ancien fichier `requirements.txt` :

```sh
uv add -r requirements.txt
```

Sinon, pour installer une dépendance directement, par exemple `pandas` :

```sh
uv add pandas
```

`uv` va automatiquement identifier la dernière version stable de `pandas` et l'ajouter dans le
fichier `pyproject.toml` de votre projet.


### Syntaxe des versions de dépendances

Le standard [PEP 440](https://peps.python.org/pep-0440/#version-specifiers) définit des syntaxes
pour préciser les versions des dépendances que vous souhaitez installer.

Ces syntaxes standards sont utilisables dans le fichier `pyproject.toml` comme dans le fichier
`requirements.txt`.

Les syntaxes de base sont :
- `==`: C'est la contrainte la plus stricte, utilisée par l'export `pip freeze`.
- `>=`: Version minimale, utilisée par défaut par `uv add <package>`.

Pour garantir la stabilité de votre projet, il est recommandé d'utiliser des contraintes de version
plus strictes que `>=`. Pour bénéficier des mises à jour de sécurité tout en évitant les
changements de comportement majeurs, vous pouvez utiliser la clause `~=` (compatible release
clause). Par exemple :
- `pandas~=2.1.2` est équivalent à `pandas>=2.1.2,==2.1.*` ou `pandas>=2.1.2,<2.2.0`, ce qui inclut toutes les versions
  `2.1.x` à partir de la `2.1.2`, mais exclut la `2.2.0` et les suivantes.
- `pandas~=2.1` est équivalent à `pandas>=2.1,==2.*` ou `pandas>=2.1,<3.0`, ce qui inclut toutes les versions
  `2.x` à partir de la `2.1`, mais exclut la `3.0.0` et les suivantes.

Ces règles fonctionne bien avec les paquets respectant le versionnage sémantique
([SemVer](https://semver.org/lang/fr/)), où les versions majeures indiquent des changements de
comportement potentiellement non rétrocompatibles.

Attention aux paquets ne respectant pas ce versionnage, ou adoptant des version de style "bêta"
comme `0.x.y`, où les changements mineurs peuvent introduire des changements de comportement. De
manière générale, le premier chiffre non nul doit être considéré comme le composant majeur de la
version et doit donc être fixé par une contrainte stricte (par exemple `~=0.9.3`).


### Niveau avancé de la gestion des dépendances

Il est probable que vous ayez besoin d'outils de développement qui ne sont pas des dépendances
nécessaires à l'exécution de votre application. Les gestionnaires de packages modernes permettent
de définir des dépendances de développement distinctes des dépendances de production.

Pour installer une dépendance de développement, par exemple l'outil `pytest` :

```sh
uv add --dev pytest
```

Pour installer l'ensemble des dépendances de votre projet, ce qui inclut à la fois les
dépendances de production et de développement :

```sh
uv sync
```

Cette commande s'accompagne de la création d'un fichier `uv.lock`, dit "lockfile", qui contient
la liste de toutes les dépendances de votre projet, avec leurs versions exactes. Ce fichier est une
source de vérité de dépendances testées et fonctionnelles pour votre application, garantissant
que votre projet soit reproductible et que des versions fonctionnelles des dépendances soient
utilisées à chaque installation.

En production, préferez installer uniquement les dépendances de production avec les versions
exactes listées dans le fichier `uv.lock` :

```sh
uv sync --no-dev --frozen
```

La commande `uv sync` s'accompagne également de la création automatique d'un dossier `.venv` pour
l'installation des dépendances dans un environnement virtuel isolé.

Pour executer des commandes dans le contexte de cet environnement virtuel, pas besoin d'activer
manuellement l'environnement. Utilisez plutôt `uv run`, par exemple :

```sh
uv run <command>
```

_Plus d'informations sur la gestion des dépendances avec `uv` :_
_[uv - Managing dependencies](https://docs.astral.sh/uv/concepts/projects/dependencies/)._

_Plus d'informations sur `uv sync` et `uv run` :_
_[uv - Locking and syncing](https://docs.astral.sh/uv/concepts/projects/sync/) et_
_[uv - Running commands in projects](https://docs.astral.sh/uv/concepts/projects/run/)._


## Bonus de `uv` : Gestion d'environnements Python

En bonus, `uv` permet aussi de gérer vos environnements Python.

Installez et gérez vos versions de Python avec `uv python`
:

```sh
uv python list
uv python install 3.13
uv python use 3.13
```

Créez et gérez vos environnements virtuels Python avec `uv venv`.

De ce fait, `uv` peut potentiellement également remplacer des outils comme `pyenv` et `virtualenv`
pour une gestion complète des versions de Python et des environnements virtuels.


## FastAPI, rapidement !

Framework d'API bien connu en Data Science : [FastAPI](https://fastapi.tiangolo.com/).
_Des alternatives existent, comme [Flask](https://flask.palletsprojects.com/en/stable/), [Litestar](https://litestar.dev/), [Django Ninja](https://django-ninja.dev/), ou [Django REST framework](https://www.django-rest-framework.org/)._

```sh
uv add fastapi[standard]
```

Structure suggérée pour une application API :
```
my_app/
├── controller/  # contient les endpoints FastAPI
├── src/  # contient la logique métier et votre code complexe
├── test/  # contient les tests unitaires et fonctionnels (pour Pytest notamment)
├── pyproject.toml
├── uv.lock
└── main.py
```

_L'appellation `controller` est inspirée du pattern ["Model-View-Controller" (MVC)](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur)._

Démarrez votre application en développment avec :

```sh
PYTHONPATH=. uv run fastapi dev main.py --host 0.0.0.0 --port 8080
```

_`PYTHONPATH=.` permet d'ajouter le dossier courant au `sys.path` de Python, ce qui facilite
l'import des modules locaux du projet._


## Outils de développement principaux

### Pytest (tests unitaire et fonctionnels)

Premier outil de développement, incontournable : [Pytest](https://docs.pytest.org/en/stable/).

```sh
uv add --dev pytest
```

L'outil détecte et exécute toutes les fonctions nommées `test*` dans les fichiers de votre
projet nommés `test_*.py` ou `*_test.py`.

Suivez la documentation de FastAPI pour créer des tests fonctionnels adaptés à ce framework.

Exécutez Pytest à la racine de votre projet avec :

```sh
PYTHONPATH=. uv run pytest .
```

Pytest affichera le rapport des tests et des erreurs dans la console.


### Pytest avec couverture

Plugin Pytest pour mesurer la couverture de code :
[pytest-cov](https://pytest-cov.readthedocs.io/en/latest/).

La couverture de code indique le pourcentage de lignes de code exécutées durant les tests. Cela
permet d'identifier des parties du code non testées, notamment des blocs conditionnels.

```sh
uv add --dev pytest-cov
```

Exécutez Pytest avec le plugin de couverture directement intégré :

```sh
PYTHONPATH=. uv run pytest --cov .
```

Pytest affichera le rapport des tests avec une tableau supplémentaire indiquant la couverture de
code pour chacun des fichiers de votre projet.


### Pylint (qualité de code)

Linter populaire pour analyser la qualité de votre code :
[Pylint](https://pylint.pycqa.org/en/latest/).

Permet d'identifier des erreurs de style, des variables mal ou non utilisées, etc.

Si vous ne souhaitez pas utiliser d'outils plus complets comme Ruff, Pylint est un outil simple
et efficace.

```sh
uv add --dev pylint
```

Exécutez Pylint à la racine de votre projet avec :

```sh
PYTHONPATH=. uv run pylint .
```

Pylint affichera un rapport avec les erreurs et donnera une note globale de qualité à votre projet.


### Isort (propreté des imports)

Outil simple pour trier et organiser automatiquement les imports dans vos fichiers Python :
[Isort](https://pycqa.github.io/isort/).

Si vous ne souhaitez pas utiliser d'outils plus complets comme Ruff, isort est efficace pour cette
tâche spécifique.

```sh
uv add --dev isort
```

Exécutez isort à la racine de votre projet avec :

```sh
PYTHONPATH=. uv run isort . --check-only
PYTHONPATH=. uv run isort . --apply
```


### Black (formatage et style du code)

Outil de formatage de code automatique, très populaire dans la communauté Python :
[Black](https://black.readthedocs.io/en/stable/).

Référence dans le domaine du formatage de code Python, mais équivalent aux capacités de formatage
de Ruff, qui peut être suffisant et servir d'outil unique pour le linting et le formatage.

```sh
uv add --dev black
```

Exécutez Black à la racine de votre projet avec :

```sh
PYTHONPATH=. uv run black .
```


### Ruff (qualité de code et formatage)

Outil de linting et de formatage de code très populaire dans la communauté Python :
[Ruff](https://docs.astral.sh/ruff/).

Mentionné depuis 3 sections, Ruff permet de remplir les fonctions de Pylint, isort et Black, et
bien plus encore, avec un seul outil rapide et efficace.

```sh
uv add --dev ruff
```

Exécutez Ruff à la racine de votre projet avec :

```sh
# Linting
PYTHONPATH=. uv run ruff check .  # rapport uniquement
PYTHONPATH=. uv run ruff check --fix .  # avec corrections automatiques

# Formatage
PYTHONPATH=. uv run ruff format .
```

Attention à correctement configurer Ruff pour correspondre à vos attentes et besoins. La
configuration peut être placée dans le fichier `pyproject.toml` de votre projet. Référez-vous à la
documentation officielle pour plus de détails :
[Ruff - Configuration](https://docs.astral.sh/ruff/configuration/).

Par exemple pour le linting :

```toml
[tool.ruff]
line-length = 100

[tool.ruff.lint]
# https://docs.astral.sh/ruff/rules/
# Select F for Pyflakes rules
# Select E and W for Pycodestyle errors and warnings
# Select I for isort rules
# TODO: Include more rules as the codebase matures
# (e.g. N (naming), C90 (complexity), S (security), and eventually ALL)
select = ["F", "E", "W", "I"]
# Ignore W191 to allow tab indentation
ignore = ["W191"]
# Allow auto-fix of all fixable issues
fixable = ["ALL"]
unfixable = []
# Allow unused variables when underscore-prefixed.
dummy-variable-rgx = "^(_+|(_+[a-zA-Z0-9_]*[a-zA-Z0-9]+?))$"

[tool.ruff.lint.isort]
known-first-party = ["app"]
# known-third-party = ["package"]
```

- Important de sélectionner le jeu de règles `I` pour que Ruff joue le rôle d'isort.
- Liste des règles : [docs.astral.sh/ruff/rules](https://docs.astral.sh/ruff/rules/).

Par exemple pour le formatage :

```toml
[tool.ruff]
line-length = 100

[tool.ruff.format]
quote-style = "single"
indent-style = "tab"
skip-magic-trailing-comma = false
line-ending = "lf"
```


### MyPy (vérification de types)

Outil de vérification statique de types pour Python :
[MyPy](https://mypy.readthedocs.io/en/stable/).

Petite pépite pour améliorer la robustesse de votre code en garantissant la conformité des types et
des signatures de fonctions dans leur usage. Permet de compenser les faiblesses d'un langage
faiblement et dynamiquement typé comme Python, qui entraîne facilement des erreurs au runtime.

```sh
uv add --dev mypy
PYTHONPATH=. uv run mypy --explicit-package-bases .
```


### Pre-commit, pour automatiser l'exécution des outils

Une fois installés en dépendances de développement, vous pouvez automatiser l'exécution de ces
outils via des scripts. Notamment en CI/CD, ou localement avec
[Pre-commit](https://pre-commit.com/).

```sh
uv add --dev pre-commit
```

Créez un fichier `.pre-commit-config.yaml` à la racine de votre projet pour configurer les étapes à
exécuter avant vos commits Git. Par exemple :

```yaml
repos:

  - repo: local
    hooks:
      # Run the ruff linter.
      - id: ruff-check
        name: ruff check (local)
        entry: ruff check --fix
        language: system
        types_or: [ python, pyi ]
      # Run the ruff formatter.
      - id: ruff-format
        name: ruff format (local)
        entry: ruff format
        language: system
        types_or: [ python, pyi ]
```

Pre-commit permet aussi l'usage de scripts communautaires préconfigurés, par exemple ceux-ci :
[github.com/pre-commit/pre-commit-hooks](https://github.com/pre-commit/pre-commit-hooks).

Exécutez Pre-commit manuellement à la racine de votre projet avec :

```sh
uv run pre-commit run --all-files
```

Ou intégrez-le dans votre workflow Git en installant le hook Git avec :

```sh
uv run pre-commit install
```


## Autres outils à explorer

### Pour la qualité du code

- [Radon](https://radon.readthedocs.io/en/latest/)

  Radon calcule des métriques de complexité cyclomatique, et des indices de maintenabilité pour les
  fonctions et classes de votre code.

  ```sh
  uv add --dev radon
  PYTHONPATH=. uv run radon cc . -s
  PYTHONPATH=. uv run radon mi .
  ```

- [Flake8](https://flake8.pycqa.org/en/latest/)

  Flake8 est un autre outil de linting populaire, comme Pylint et Ruff. Il permet quelques
  vérifications supplémentaires, mais la plupart de ses fonctionnalités sont couvertes par Ruff.

  ```sh
  uv add --dev flake8
  PYTHONPATH=. uv run flake8 .
  ```

- [Pydocstyle](https://www.pydocstyle.org/en/stable/)

  Pydocstyle vérifie la conformité de vos docstrings avec les conventions Python. Il permet aussi
  de détecter les docstrings manquantes.

  ```sh
  uv add --dev pydocstyle
  PYTHONPATH=. uv run pydocstyle .
  ```

- [Interrogate](https://interrogate.readthedocs.io/en/latest/)

  Interrogate mesure la couverture des docstrings dans votre code pour assurer une documentation
  technique complète et cohérente.

  ```sh
  uv add --dev interrogate
  PYTHONPATH=. uv run interrogate -v .
  ```


### Pour la robustesse du code

- [Hypothesis](https://hypothesis.readthedocs.io/en/latest/)

  Plugin Pytest pour créer des tests basés sur des propriétés, générant automatiquement des
  données de test variées sur des types et échelles définies pour des tests plus robustes.

  ```sh
  uv add --dev hypothesis
  PYTHONPATH=. uv run pytest --hypothesis-show-statistics
  ```

- [ty](https://docs.astral.sh/ty/)

  ty est un vérificateur de types rapide développé par les créateurs de uv et Ruff. Il est
  actuellement en phase bêta, mais prometteur comme alternative à MyPy et Pyright.

  ```sh
  uv add --dev ty
  PYTHONPATH=. uv run ty check .
  ```

- [Pyright](https://github.com/microsoft/pyright)

  Pyright est un vérificateur de types rapide développé par Microsoft, souvent utilisé comme
  alternative à MyPy. Il est également disponible en tant qu'extension pour VS Code.

  En console, l'outil est plus lourd que MyPy et a notamment une dépendance à Node.js, ce qui peut
  le rendre moins adapté pour une intégration CI/CD ou avec Pre-commit.

  ```sh
  uv add --dev pyright
  PYTHONPATH=. uv run pyright .
  ```


### Pour la sécurité

- [pip-audit](https://pypi.org/project/pip-audit/)

  Pip-audit est un outil qui vérifie les dépendances Python installées pour détecter les
  vulnérabilités de sécurité connues.

  ```sh
  uv add --dev pip-audit
  PYTHONPATH=. uv run pip-audit
  ```

- [detect-secrets](https://github.com/Yelp/detect-secrets)

  Outil de détection de secrets (comme des clés API) dans votre code source.

  ```sh
  uv add --dev detect-secrets
  PYTHONPATH=. uv run detect-secrets scan .
  ```

- [Bandit](https://bandit.readthedocs.io/en/latest/)

  Bandit analyse votre code à la recherche de vulnérabilités de sécurité et mauvaises pratiques
  courantes.

  ```sh
  uv add --dev bandit
  PYTHONPATH=. uv run bandit -r .
  ```

- [Safety](https://site.getsafety.com/cli)

  Outil SaaS pour identifier les vulnérabilités de sécurité dans vos dépendances.
  _(Nécessite un compte SaaS sur la plateforme de Safety.)_

  ```sh
  uv add --dev safety
  PYTHONPATH=. uv run safety scan
  ```


### Pour la modernisation du code

- [Pyupgrade](https://github.com/asottile/pyupgrade)

  Pyupgrade automatise la mise à jour de la syntaxe de votre code aux passages de versions plus
  récentes de Python.

  ```sh
  uv add --dev pyupgrade
  PYTHONPATH=. uv run pyupgrade --py313-plus
  ```


### Pour la documentation

- [Sphinx](https://www.sphinx-doc.org/en/master/)

  Sphinx est un générateur de documentation puissant pour les projets Python, particulièrement
  adapté aux bibliothèques.

  ```sh
  uv add --dev sphinx
  uv run sphinx-quickstart --quiet docs

- [MkDocs](https://www.mkdocs.org/)

  MkDocs est un générateur de documentation statique simple pour les projets Python, adapté aux
  documentations de projet et guides utilisateur.

  ```sh
  uv add --dev mkdocs
  uv run mkdocs new docs
  ```

- [Doc8](https://github.com/PyCQA/doc8)

  Docs8 est un linter pour la documentation, vérifiant le style et la cohérence des fichiers
  Markdown et reStructuredText.

  ```sh
  uv add --dev doc8
  PYTHONPATH=. uv run doc8 docs/
  ```


## TL;DR, les références rapides

- Statut des versions de Python : [devguide.python.org/versions](https://devguide.python.org/versions/)
- [uv - Installation](https://docs.astral.sh/uv/getting-started/installation/)
- [Poetry - Installation](https://python-poetry.org/docs/#installation)
- [uv - Creating projects](https://docs.astral.sh/uv/concepts/projects/init/)
- Syntaxe des versions de dépendances : [PEP 440 - Version Specifiers](https://peps.python.org/pep-0440/#version-specifiers)
- [SemVer - Semantic Versioning](https://semver.org/lang/fr/)
- [uv - Managing dependencies](https://docs.astral.sh/uv/concepts/projects/dependencies/)
- [uv - Locking and syncing](https://docs.astral.sh/uv/concepts/projects/sync/)
- [uv - Running commands in projects](https://docs.astral.sh/uv/concepts/projects/run/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Pytest](https://docs.pytest.org/en/stable/)
- [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/)
- [Pylint](https://pylint.pycqa.org/en/latest/)
- [Ruff](https://docs.astral.sh/ruff/)
- [MyPy](https://mypy.readthedocs.io/en/stable/)
- [Pre-commit](https://pre-commit.com/)
