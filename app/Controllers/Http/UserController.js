'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const { name, phoneNumber, email, password } = request.all();

    const user = await User.create({ name, phoneNumber, email, password });

    response.status(201).json(user);
  }
}

module.exports = UserController
