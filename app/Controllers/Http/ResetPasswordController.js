'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Token = use('App/Models/Token')

class ResetPasswordController {
  async store({ request }) {
    const { token, password } = request.all();

    const userToken = await Token.findByOrFail('token', token);
    const user = await userToken.user().fetch();

    user.password = password;

    await user.save();
  }
}

module.exports = ResetPasswordController
