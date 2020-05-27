'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ConnectionDatabaseFailedException extends LogicalException {
  handle(error, { response }) {
    return response.status(500).send({ message: 'Falha ao tentar se conectar ao MongoDB.' })
  }
}

module.exports = ConnectionDatabaseFailedException
