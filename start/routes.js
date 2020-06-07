'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/', 'TaskController.index').as('list');
  Route.get('cadastrar', 'TaskController.create').as('create')
  Route.post('cadastrar', 'TaskController.store').as('store')
  Route.get('atualizar/:id', 'TaskController.edit').as('edit')
  Route.post('atualizar/:id', 'TaskController.update').as('update')
  Route.get('apagar/:id', 'TaskController.delete').as('delete')
}).prefix('tarefas')
