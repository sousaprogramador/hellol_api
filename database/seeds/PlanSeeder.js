'use strict'

/*
|--------------------------------------------------------------------------
| PlanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Plan = use('App/Models/Plan');

class PlanSeeder {
  async run () {
    const fare = [
      { name: 'FaleMais 30', description: 'Com o Hellol FaleMais30 você tem 30 minutos de ligações', price: 15 , minutes_use_it: 30 },
      { name: 'FaleMais 60', description: 'Com o Hellol FaleMais60 você tem 60 minutos de ligações', price: 20 , minutes_use_it: 60 },
      { name: 'FaleMais 90', description: 'Com o Hellol FaleMais60 você tem 90 minutos de ligações', price: 30 , minutes_use_it: 90 },
      { name: 'FaleMais 120', description: 'Com o Hellol FaleMais120 você tem 60 minutos de ligações', price: 35 ,minutes_use_it: 120 },
    ];
    await Plan.createMany(fare);
  }
}

module.exports = PlanSeeder
