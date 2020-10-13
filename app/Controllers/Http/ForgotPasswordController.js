'use strict'
const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Mail = use('Mail');
const Env = use('Env');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class ForgotPasswordController {
  async store({ request }) {
    const { email } = request.all();

    const user = await User.findByOrFail('email', email);

    const random = await promisify(randomBytes)(16);
    const token = random.toString('hex');

    await user.tokens().create({
      token,
      type: 'forgortpassword'
    })

    const resetPasswordUrl = `${Env.get('FONRT_URL')}/reset?token=${token}`;

    await Mail.send(
      'emails.forgotpassword',
      {
        name: user.name,
        resetPasswordUrl
      }, (message) => {
        message
          .to(user.email)
          .from('oi@telzir.com.br')
          .subject('Recuperação de senha')
      })

  }
}

module.exports = ForgotPasswordController
