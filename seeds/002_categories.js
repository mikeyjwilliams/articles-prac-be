exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .truncate()
    .then(() => {
      // Inserts seed entries
      return knex('categories').insert([
        { category: 'node.js' },
        { category: 'express' },
        { category: 'react' },
        { category: 'math' },
        { category: 'art' },
      ]);
    });
};
