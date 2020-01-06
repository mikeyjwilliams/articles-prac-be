exports.up = async function(knex) {
  return knex.schema.createTable('articles', table => {
    table.increments('article_id');
    table
      .string('title', 160)
      .notNullable()
      .unique();
    table.text('content').notNullable();
    table.timestamps(true, true);
    table
      .integer('category_id')
      .unsigned()
      .notNullable();
    table.foreign('category_id').references('categories.category_id');
  });
};

exports.down = async function(knex) {
  return knex.schema.dropTableIfExists('articles');
};
