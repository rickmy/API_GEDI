
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carreras').del()
    .then(function () {
      // Inserts seed entries
      return knex('carreras').insert([
        {idInstituto:1 ,carreras:'Marketing'},
        {idInstituto:1 ,carreras: 'Guía Nacional de Turismo'},
        {idInstituto:1 ,carreras: 'Arte Culinario Ecuatoriano'},
        {idInstituto:2 ,carreras: 'Diseño de Modas'},
        {idInstituto:3 ,carreras: 'Desarrollo de Software'}
      ]);
    });
};
