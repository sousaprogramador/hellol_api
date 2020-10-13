'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanSchema extends Schema {
  up() {
    this.create('plans', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('description', 80).notNullable()
      table.float('price', 16,2).notNullable()
      table.integer('minutes_use_it', 80).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('plans')
  }
}

module.exports = PlanSchema
