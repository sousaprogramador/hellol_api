'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Fare = use('App/Models/Fare')
const Plan = use('App/Models/Plan')

/**
 * Resourceful controller for interacting with tariffs
 */
class FareController {
  async store({ request, response }) {
    const { originCode, destinationCode, minutePrice } = request.all();

    const fare = await Fare.create({ originCode, destinationCode, minutePrice });

    return response.status(201).json(fare);
  }

  async simulation({request,response}){
    const { originCode, destinationCode, minutes, planId } = request.all();

    const { minutePrice } = await Fare.query()
                            .where('originCode', originCode)
                            .where('destinationCode', destinationCode)
                            .first();
    
    const planQuery = await Plan.query().where('id', planId).first();

    const priceTotal = minutes * minutePrice;

    const minExcetd = planQuery.minutes_use_it - minutes;

    const priceAdd = minExcetd * minutePrice * 0.1;

    const planRemuse = {
      name:planQuery.name,
      origin:originCode,
      destination:destinationCode,
      minutes:minutes,
      priceTotal:priceTotal,
      pricePlan: Math.abs(minExcetd) * minutePrice + priceAdd, 
    }

    response.send(planRemuse)
  }
}

module.exports = FareController
