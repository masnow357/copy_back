## Seed the DB with test dat

Use the _env var_ `SEED=true`. For instance:

```sh
SEED=true node src/index.js
```

## Use MySQL on Docker

Just run:
```sh
docker run --name some-mysql \
--rm \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=clave \
-e MYSQL_DATABASE=database_max \
mysql \
--default-authentication-plugin=mysql_native_password

```

Remove the `--rm \` line if you want to preserve the container.