;

module.exports = {
    development: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: 'pg',
        connection: {
                        host: 'localhost', 
                        port :'5433',
                        user: 'postgres', 
                        password: 'Rick08my12', 
                        database: 'GEDI'
                    }   
    },
    production: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

    
}
