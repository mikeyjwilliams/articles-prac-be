
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id');
    table.string('email', 65).notNull().unique();
    table.text('password').notNull();
    table.timestamps(true, true);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
