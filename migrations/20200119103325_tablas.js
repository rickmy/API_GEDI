;
   exports.up = function(knex, Promise) {
      return knex.schema
      .createTable('institutos', function (t) {
         t.increments('id');
         t.date('created_at');
         t.date('updated_at');
         t.string('codigo',50);
         t.string('codigo_sniese',50).notNullable();
         t.string('nombre', 200).notNullable();
         t.string('estado',20).notNullable().defaultTo('ACTIVO');
      })

      .createTable('carreras', function (t) {
         t.increments('id');
         t.date('created_at');
         t.date('updated_at');
         t.integer('instituto_id')//.notNullable().references('id').inTable('institutos');
         t.string('codigo',50);
         t.string('codigo_sniese',50);
         t.string('nombre', 200).notNullable();
         t.string('descripcion',200).notNullable();
         t.string('modalidad',50).notNullable();
         t.string('numero_resolucion',50);
         t.string('titulo_otorga',200).notNullable();
         t.string('siglas',50).notNullable();
         t.string('tipo_carrera',50).notNullable();
         t.string('estado',20).notNullable().defaultTo('ACTIVO');
      }) 
      
      .createTable('roles', function (t) {
         t.increments('id');
         t.date('created_at');
         t.date('updated_at');
         t.string('descripcion',200).notNullable();
         t.string('rol',200).notNullable();
         t.string('estado',20).notNullable().defaultTo('ACTIVO');
      })

      .createTable('users', function (t) {
         t.increments('id');
         t.string('codigo_user',50).unique();
         t.integer('role_id').notNullable()//.references('id').inTable('roles');
         t.string('name',255).notNullable();
         t.string('user_name', 255).notNullable().unique();
         t.string('email' ,255).notNullable().unique();
         t.date('email_verified_at');
         t.string('password',255).notNullable();
         t.string('estado',20).notNullable().defaultTo('ACTIVO');
         t.string('remember_token');
         t.date('created_at');
         t.date('updated_at');
      })

      .createTable('carrera_user', function (t) {
         t.increments('id');
         t.date('created_at');
         t.date('updated_at');
         t.integer('user_id').notNullable()//.references('id').inTable('users');
         t.integer('carrera_id').notNullable()//.references('id').inTable('carreras');
      }) 

      .createTable('documentos', function (t) {
         t.increments('id');
         t.integer('idUsuario')//.references('id').inTable('users');
         t.string('codigo_user',50);
         t.string('codigo_documento',50).notNullable().unique();
         t.date('fechaElaboracion').defaultTo(knex.fn.now());
         t.date('fechaModificacion');
         t.string('path',250);
         t.boolean('estado').defaultTo(true);
      })
      
   };

   exports.down = function(knex, Promise) {
      return knex.schema
      .dropTable("institutos")
      .dropTable("carreras")
      .dropTable('roles')
      .dropTable("carreras_user")
      .dropTable("users")
      .dropTable("documentos")
   };