'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Benicrazy da Silva',
      email: 'benicrazy@gmail.com',
      password: '123456'
    })

    // creating automaticallly a team by relationship
    await user.teams().create({
      name: 'Rocketman',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
