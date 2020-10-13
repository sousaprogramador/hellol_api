const { test, trait } = use('Test/Suite')('plans');
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

trait('Test/ApiClient')

test('it should be able to create plans', async ({ assert, client }) => {

  const response = await client.post('/plan')
    .send({ name: 'Plano Telzir', minutes_use_it: '20' })
    .end();

  response.assertStatus(201);
  assert.exists(response.body.id);
})