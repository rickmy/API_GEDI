
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('estadosSesion').del()
    .then(function () {
      // Inserts seed entries
      return knex('estadosSesion').insert([
        /*{estadoSesion: 'conectado'},
        {estadoSesion: 'desconectado'}*/
      ]);
    });
};
