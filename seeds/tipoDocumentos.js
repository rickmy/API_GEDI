
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tipoDocumentos').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipoDocumentos').insert([
        /* {descripcion: 'Acta'},
        {descripcion: 'Convocatoria'},
        {descripcion: 'Hoja de Vida'},
        {descripcion: 'Memoramdum'},
        {descripcion: 'Solicitud'},
        {descripcion: 'Oficios'} */
      ]);
    });
};
