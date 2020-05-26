'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class RegistrationFailedException extends LogicalException {
  handle (error, { response }) {
    response.status(500).send({ message: 'Falha ao criar a tarefa.' })
  }
}

module.exports = RegistrationFailedException
