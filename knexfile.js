;

module.exports = {
    development: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: 'pg',
        connection: {
                        host: '127.0.0.1', 
                        user: 'postgres', 
                        password: 'Rick08my12', 
                        database: 'GEDI'
                    }   
    },
    production: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: 'pg',
        connection: {
                        host: '127.0.0.1', 
                        user: 'postgres', 
                        password: 'Rick08my12', 
                        database: 'GEDI'
                    }   
    }

    
}
