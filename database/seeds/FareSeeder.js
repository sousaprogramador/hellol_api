'use strict'

/*
|--------------------------------------------------------------------------
| FareSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Fare = use('App/Models/Fare');

class FareSeeder {
  async run() {
    const fare = [
      { originCode: '011', destinationCode: '016', minutePrice: 1.9 },
      { originCode: '011', destinationCode: '017', minutePrice: 1.7 },
      { originCode: '011', destinationCode: '018', minutePrice: 0.9 },
      { originCode: '016', destinationCode: '011', minutePrice: 2.9 },
      { originCode: '017', destinationCode: '011', minutePrice: 2.7 },
      { originCode: '018', destinationCode: '011', minutePrice: 1.9 },
      { originCode: '018', destinationCode: '017', minutePrice: 1.7 },
    ];
    await Fare.createMany(fare);
  }
}

module.exports = FareSeeder
