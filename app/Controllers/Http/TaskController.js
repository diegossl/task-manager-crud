'use strict'

const Task = use('App/Models/Task')
const RegistrationFailed = use('App/Exceptions/RegistrationFailedException')
const DeleteFailed = use('App/Exceptions/DeleteFailedException')
const UpdateFailed = use('App/Exceptions/UpdateFailedException')
const FetchFailed = use('App/Exceptions/FetchFailedException')

class TaskController {

  async index ({ view }) {
    const tasks = await Task.find({})
    return view.render('admin.list', { tasks: tasks })
  }

  async create ({ view }) {
    return view.render('admin.create')
  }

  async store ({ request, response }) {
    try {
      const task = request.post()
      await Task.create(task)
      return response.route('list')
    } catch (error) {
      throw new RegistrationFailed(error)
    }
  }

  async edit ({ params, view }) {
    try {
      const task = await Task.findOne({ _id: params.id })
      return view.render("admin.edit", task);
    } catch (error) {
      throw new FetchFailed(error);
    }
  }

  async update ({ params, request, response }) {
    try {
      const id = { _id: params.id }
      const task = request.post()
      await Task.updateOne(id, task)
      return response.route('list')
    } catch (error) {
      throw new UpdateFailed(error)
    }
  }

  async delete ({ params, response }) {
    try {
      const id = { _id: params.id }
      await Task.deleteOne(id)
      return response.route('list')
    } catch (error) {
      throw new DeleteFailed(error)
    }
  }

}

module.exports = TaskController
