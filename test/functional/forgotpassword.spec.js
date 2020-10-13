const { test, trait, beforeEach, afterEach } = use('Test/Suite')('ForgotPassword');

const Mail = use('Mail')
const Hash = use('Hash')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('DatabaseTransactions')

beforeEach(() => {
  Mail.fake()
})

afterEach(() => {
  Mail.restore();
});

test('is should send an email with reset passowrd instructions', async ({ assert, client }) => {

  const forgotPayload = {
    email: 'sousa.programador@gmail.com',
  };

  const user = await Factory
    .model('App/Models/User')
    .create(forgotPayload);

  const response = await client.post('/forgot')
    .send(forgotPayload)
    .end();

  response.assertStatus(204);

  const recentEmail = Mail.pullRecent();
  assert.equal(recentEmail.message.to[0].address, forgotPayload.email);

  const token = await user.tokens().first();

  assert.include(token.toJSON(), {
    user_id: user.id,
    type: 'forgortpassword',
  })


})

test('is should be able to reset password', async ({ assert, client }) => {
  const email = 'sousa.programador@gmail.com';
  const user = await Factory.model('App/Models/User').create({ email });
  const userToken = await Factory.model('App/Models/Token').make();

  await user.tokens().save(userToken);

  const response = await client.post('/reset')
    .send({
      token: userToken.token,
      password: '123456',
      password_confirmation: '123456'
    })
    .end();

  response.assertStatus(204);

  await user.reload();

  const checkPassword = await Hash.verify('123456', user.password);

  assert.isTrue(checkPassword);

})