
exports.up = async function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id');
    table.string('email', 65).notNullable().unique();
    table.text('password').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('users');
};
