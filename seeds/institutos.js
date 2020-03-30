
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('institutos').del()
    .then(function () {
      // Inserts seed entries
      return knex('institutos').insert([
        {instituto: 'Instituto Superior Tecnológico de Turismo y Patrimonio Yavirac'},
        {instituto: 'Instituto Superior Tecnológico Gran Colombia'},
        {instituto: 'Instituto Superior Tecnológico Benito Juárez'}
      ]);
    });
};
