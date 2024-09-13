/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('car_types', (table) => {
        
        table.increments('id').primary().unique(); 

        table.string('carType', 30).notNullable().unique(); 
        
        table.timestamps(true, true); 
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTableIfExists("car_types");
};
