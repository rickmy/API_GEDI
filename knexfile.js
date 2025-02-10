module.exports = {
  development: {
    migrations: { tableName: "knex_migrations" },
    seeds: { tableName: "./seeds" },
    client: "pg",
    connection: "postgres://postgres:mydbpg@localhost:5432/gd",
  },
  production: {
    migrations: { tableName: "knex_migrations" },
    seeds: { tableName: "./seeds" },
    client: "pg",
    connection: "postgres://postgres:mydbpg@localhost:5432/gd",
  },
};
