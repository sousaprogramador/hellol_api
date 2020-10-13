'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FareSchema extends Schema {
  up() {
    this.create('fares', (table) => {
      table.increments()
      table.string('originCode', 4).notNullable()
      table.string('destinationCode', 4).notNullable()
      table.float('minutePrice', 16, 4).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('fares')
  }
}

module.exports = FareSchema
