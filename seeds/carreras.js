
 exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carreras').del()
    .then(function () {
      // Inserts seed entries
      return knex('carreras').insert([
        {idInstituto:1 ,carrera:'Marketing'},
        {idInstituto:1 ,carrera: 'Guía Nacional de Turismo'},
        {idInstituto:1 ,carrera: 'Arte Culinario Ecuatoriano'},
        {idInstituto:2 ,carrera: 'Diseño de Modas'},
        {idInstituto:3 ,carrera: 'Desarrollo de Software'} 
      ]);
    });
}; 

// para subir la carreras comentar las demas seed
