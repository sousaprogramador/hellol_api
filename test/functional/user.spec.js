const { test, trait } = use('Test/Suite')('user');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

trait('Test/ApiClient')

test('it should be able to create user', async ({ assert, client }) => {

  const response = await client.post('/user')
    .send({
      name: 'Mateus Sousa da Silva',
      phoneNumber: '63992105506',
      email: 'programador@mail.com',
      password: "secret"
    })
    .end();

  response.assertStatus(201);
  assert.exists(response.body.id);
})