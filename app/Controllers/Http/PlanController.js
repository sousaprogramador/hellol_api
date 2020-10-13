'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Plan = use('App/Models/Plan')

class PlanController {
  async index({ request, response }) {
    const plans = await Plan.all()

    return response.send(plans);
  }
  async store({ request, response }) {
    const { name, minutes_use_it } = request.all();

    const plan = await Plan.create({ name, minutes_use_it });

    return response.status(201).json(plan);
  }
}

module.exports = PlanController
