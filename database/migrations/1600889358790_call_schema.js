'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CallSchema extends Schema {
  up() {
    this.create('calls', (table) => {
      table.increments()
      table.text('callPhone', 50)
      table.text('originCode', 4)
      table.text('destinationCode', 4)
      table.float('callDuration', 15, 3)
      table.text('monthYear', 6)
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps()
    })
  }

  down() {
    this.drop('calls')
  }
}

module.exports = CallSchema
