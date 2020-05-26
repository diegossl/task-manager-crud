'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class DeleteFailedException extends LogicalException {
  handle(error, { response }) {
    return response.status(500).send({ message: 'Falha ao deletar tarefa.' })
  }
}
module.exports = DeleteFailedException
