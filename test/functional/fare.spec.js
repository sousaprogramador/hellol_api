const { test, trait } = use('Test/Suite')('fare');
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

trait('Test/ApiClient')

test('it should be able to create fare', async ({ assert, client }) => {

  const response = await client.post('/fare')
    .send({ originCode: '63', destinationCode: '61', minutePrice: 20 })
    .end();

  response.assertStatus(201);
  assert.exists(response.body.id);
})

