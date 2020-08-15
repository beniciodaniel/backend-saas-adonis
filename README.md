# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Creating a Postgres database using Docker

Run the following command to create a postgres database with docker (with db, user and password set as "postgres")

```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

### Editing .ENV to use the postgres database

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=0kTmX6MG7BlExPPP5ES2w5bqJ747DmrK
DB_CONNECTION=pg #edited
DB_HOST=127.0.0.1
DB_PORT=5432 #edited
DB_USER=postgres #edited
DB_PASSWORD=postgres #edited
DB_DATABASE=postgres #edited
HASH_DRIVER=bcrypt
```

### Model

Run the following command to make models.
-m for migration
-c for controller
```bash
adonis make:model <name> -m -c 
```

### Migrations

Run the following command to run startup migrations.

```bash
adonis migration:run
```


