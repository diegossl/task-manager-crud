'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/', 'TaskController.index')
  Route.get('/cadastrar', 'TaskController.create').as('create')
  Route.post('cadastrar', 'TaskController.store').as('store')
  Route.post('atualizar/:id', 'TaskController.update').as('update')
  Route.post('apagar/:id', 'TaskController.delete').as('delete')
}).prefix('tarefas')
