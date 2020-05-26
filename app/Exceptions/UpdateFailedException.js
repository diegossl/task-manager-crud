'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class UpdateFailedException extends LogicalException {
  handle (error, { response }) {
    response.status(500).send({ message: 'Falha ao atualizar a tarefa.' })
  }
}

module.exports = UpdateFailedException
