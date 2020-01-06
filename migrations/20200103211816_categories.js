exports.up = async function(knex) {
  return knex.schema.createTable('categories', table => {
    table.increments('category_id');
    table
      .string('category', 35)
      .notNullable()
      .unique();
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  return knex.schema.dropTableIfExists('categories');
};
