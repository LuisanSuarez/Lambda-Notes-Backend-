
exports.seed = function(knex, Promise) {
  const content1 = "Pido perdón a los niños por haber dedicado este libro a una persona mayor. Tengo una seria excusa: esta persona mayor es el mejor amigo que tengo en el mundo."
  const content2 = "Tengo otra excusa: esta persona mayor es capaz de entenderlo todo, hasta los libros para niños."
  const content3 = "Si todas esas excusas no bastasen, bien puedo dedicar este libro al niño que una vez fue esta persona mayor. Todos los mayores han sido primero niños."
  // Deletes ALL existing entries
  return knex('Notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Notes').insert([
        {title: 'Mi Primera Excusa', content: content1, comments: 'first lines of el Principito by Antoine'},
        {title: 'Persona Mayor', content: content2, comments: ''},
        {title: 'Leon Werth', content: content3, comments: ''}
      ]);
    });
};
