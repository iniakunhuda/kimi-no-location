/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('videos', table => {
        table.increments('id').primary();
        table.string('filename').notNullable();
        table.string('path').notNullable();
        table.integer('size').defaultTo(0);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('videos');
};
