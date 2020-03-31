   ;
   exports.up = function(knex, Promise) {
      return knex.schema
      .createTable('institutos', function (t) {
         t.increments('id');
         t.string('instituto', 80).notNullable();
         t.boolean('estado').notNullable().defaultTo(true);
      })

      .createTable('carreras', function (t) {
         t.increments('id');
         t.integer('idInstituto').notNullable().references('id').inTable('institutos')
         t.string('carrera',100).notNullable();
         t.boolean('estado').notNullable().defaultTo(true);
      })
      .createTable('estadosSesion', function (t) {
         t.increments('id');
         t.string('estadoSesion',100).notNullable();
         t.boolean('estado').notNullable().defaultTo(true);
      })
      
      .createTable('roles', function (t) {
         t.increments('id');
         t.string('rol',40).notNullable();
         t.boolean('estado').notNullable().defaultTo(true);
      })

      .createTable('usuarios', function (t) {
         t.increments('id');
         t.string('codigoUser',50).notNullable().unique();
         t.string('primerNombre',30).notNullable();
         t.string('segundoNombre', 30).notNullable();
         t.string('primerApellido', 30).notNullable();
         t.string('segundoApellido', 30).notNullable();
         t.integer('idRoles').references('id').inTable('roles');
         t.string('correo' ,100).notNullable();
         t.string('clave',50).notNullable();
         t.date('fechaRegistro').notNullable().defaultTo(knex.fn.now());
         t.integer('idEstadoSesion').references('id').inTable('estadosSesion');
         t.boolean('estado').notNullable().defaultTo(true);
      })

      .createTable('carrerasUsuarios', function (t) {
         t.increments('id');
         t.integer('idCarrera').notNullable().references('id').inTable('carreras');
         t.integer('idUsuario').notNullable().references('id').inTable('usuarios');
      })
      
      .createTable('tipoDocumentos', function (t) {
         t.increments('id');
         t.string('descripcion',50).notNullable();
         t.boolean('estado').notNullable().defaultTo(true);
      })

      .createTable('documentos', function (t) {
         t.increments('id');
         t.integer('idUsuario').notNullable().references('id').inTable('usuarios');
         t.string('codigo',45).notNullable().unique();
         t.date('fechaElaboracion').notNullable().defaultTo(knex.fn.now());
         t.date('fechaModificacion').notNullable();
         t.integer('idTipoDocumento').notNullable().references('id').inTable('tipoDocumentos');
         t.string('path',150).notNullable();
         t.boolean('estado').notNullable().defaultTo(true);
      })

      .createTable('preguntasSeguridad', function (t) {
         t.increments('id');
         t.string('preguntaSeguridad',100).notNullable();
         t.boolean('estado').notNullable().defaultTo(true)
      })

      .createTable('preguntasUsuarios', function (t) {
         t.increments('id');
         t.integer('idUsuario').notNullable().references('id').inTable('usuarios');
         t.integer('idPreguntas').notNullable().references('id').inTable('preguntasSeguridad');
         t.string('respuestas',100).notNullable();
      })
      
   };

   exports.down = function(knex, Promise) {
      return knex.schema
      .dropTable("institutos")
      .dropTable("carreras")
      .dropTable('roles')
      .dropTable('estadosSesion')
      .dropTable("carrerasUsuario")
      .dropTable("usuarios")
      .dropTable("documentos")
      .dropTable("tipoDocumentos")
      .dropTable('preguntasSeguridad')
      .dropTable('preguntasUsuarios')
   };
