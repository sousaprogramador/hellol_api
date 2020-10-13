'use strict'

class SessionController {
  async store({ request, auth, response }) {
    const { email, password } = request.all();

    const { token } = await auth.withRefreshToken().attempt(email, password);

    return response.send({ token });
  }

}

module.exports = SessionController
