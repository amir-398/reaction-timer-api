# Backend avec Express.js, MongoDB et JWT
![Version](https://img.shields.io/badge/version-1.0.0-blue)

Backend de l'application développé avec Express.js, MongoDB, et JWT pour l'authentification.

## Fonctionnalités

Backend de l'application développé avec Express.js, MongoDB, et JWT pour l'authentification.

## Technologies Utilisées

- **Express.js**: Framework minimaliste pour le développement d'applications web Node.js.

- **MongoDB**: Base de données NoSQL pour stocker les utilisateurs et les informations liées aux timers.

- **JWT (JSON Web Tokens)**: Système d'authentification sécurisé basé sur des tokens.

## Prérequis

Assurez-vous d'avoir installé Node.js, npm et MongoDB sur votre machine.

## Installation

Pour lancer le backend localement, suivez ces étapes :

1. Clonez le dépôt :

```bash
git clone https://github.com/amir-398/reaction-timer-api.git
cd reaction-timer-api
```

2. Configurez les variables d'environnement dans un fichier .env à la racine du projet :

```bash
DB_NAME=db
DB_USER=toto
DB_PASSWORD=toto_password
DB_PORT=5432
NODE_ENV=developement
JWT_KEY=secret_key
```

3. Lancez les conteneurs Docker avec Docker Compose :

```bash
docker-compose up --build
```
Ce fichier docker-compose.yml va créer deux conteneurs : un pour l'application Node.js et un autre pour MongoDB.

4. Vérifiez que le projet fonctionne en accédant à l'URL suivante dans votre navigateur ou via un client API comme Postman :

```bash
http://localhost:3000
```
