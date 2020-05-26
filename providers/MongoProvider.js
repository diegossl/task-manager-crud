'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const mongoose  = require('mongoose')

class MongoProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Mongoose', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const options = Config.get('database.mongodb.connection.options', {})
      const connectionString = Config.get('database.mongodb.connectionString', '')

      try {
        mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, ...options})
      } catch (error) {
        console.log(error)
      }
      return mongoose
    })
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
  }
}

module.exports = MongoProvider
