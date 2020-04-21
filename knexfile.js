;

module.exports = {
    development: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: 'pg',
        connection: {
                        host: 'ec2-54-152-175-141.compute-1.amazonaws.com', 
                        user: 'bpdtfcwmjjsixc', 
                        password: '43837469421c75a9b59a438847e62b3d2fd04ef163f0273a8bd41cb743a66e28', 
                        database: 'dcgf4godj25duh'
                    }   
    },
    production: {
        migrations: { tableName: 'knex_migrations'},
        seeds: { tableName: './seeds' },
        client: 'pg',
        connection: {
                        host: 'ec2-54-152-175-141.compute-1.amazonaws.com', 
                        user: 'bpdtfcwmjjsixc', 
                        password: '43837469421c75a9b59a438847e62b3d2fd04ef163f0273a8bd41cb743a66e28', 
                        database: 'dcgf4godj25duh'
                    }   
    }

    
}
