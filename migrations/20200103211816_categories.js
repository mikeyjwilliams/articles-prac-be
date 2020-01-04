
exports.up = async function (knex) {
    return knex.schema.createTable('categories', table => {
        table.increments('category_id');
        table.string('category', 35).notNull().unique();
        table.timestamps(true, true);
        table.integer('user_id').unsigned().notNull();
        table.foreign('user_id').references('users.user_id');
    })
};

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('categories');
};
