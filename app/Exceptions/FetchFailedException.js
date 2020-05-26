'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class FetchFailedException extends LogicalException {
  handle (error, { response }) {
    return response.status(500).send({ message: 'Falha ao encontrar tarefa.' })
  }
}

module.exports = FetchFailedException
