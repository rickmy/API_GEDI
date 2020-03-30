
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tiposDocumentos').del()
    .then(function () {
      // Inserts seed entries
      return knex('tiposDocumentos').insert([
        {descripcion: 'Acta'},
        {descripcion: 'Convocatoria'},
        {descripcion: 'Hoja de Vida'},
        {descripcion: 'Memoramdum'},
        {descripcion: 'Solicitud'},
        {descripcion: 'Oficios'}
      ]);
    });
};
