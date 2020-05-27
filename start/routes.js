'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/', 'TaskController.index')
  Route.get('/cadastrar', 'TaskController.create')
  Route.post('cadastrar', 'TaskController.store')
  Route.post('atualizar/:id', 'TaskController.update')
  Route.post('apagar/:id', 'TaskController.delete')
}).prefix('tarefas')
