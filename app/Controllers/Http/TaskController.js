'use strict'

const Task = use('App/Models/Task')
const RegistrationFailed = use('App/Exceptions/RegistrationFailedException')
const DeleteFailed = use('App/Exceptions/DeleteFailedException')
const UpdateFailed = use('App/Exceptions/UpdateFailedException')


class TaskController {

  async index () {
    return await Task.find({})
  }

  async create ({ view }) {
    return view.render('admin.create')
  }

  async store ({ request }) {
    try {
      const task = request.post()
      await Task.create(task)
    } catch (error) {
      throw new RegistrationFailed(error)
    }
  }

  async update ({ params, request }) {
    try {
      const id = { _id: params.id }
      const task = request.post()
      await Task.updateOne(id, task)
    } catch (error) {
      throw new UpdateFailed(error)
    }
  }

  async delete ({ params }) {
    try {
      const id = { _id: params.id }
      await Task.deleteOne(id)
    } catch (error) {
      console.log(error)
      throw new DeleteFailed(error)
    }
  }

}

module.exports = TaskController
