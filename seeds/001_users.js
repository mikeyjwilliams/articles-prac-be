exports.seed = async function(knex) {
  // Deletes ALL existing entries
  knex('users')
    .truncate()
    .then(() => {
      return knex('users').insert([
        { username: 'jackjack', password: 'lambda123' },
        { username: 'ladygaga', password: 'hello123' },
        { username: 'cartman23', password: 'welcome123' },
      ]);
    });
};
