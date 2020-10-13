'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/sessions', 'SessionController.store')
Route.post('/forgot', 'ForgotPasswordController.store')
Route.post('/reset', 'ResetPasswordController.store')
Route.get('/plan', 'PlanController.index')
Route.post('/plan', 'PlanController.store')
Route.post('/fare', 'FareController.store')
Route.post('/fare/simulation', 'FareController.simulation')
Route.post('/user', 'UserController.store')