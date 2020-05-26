'use strict'

const mongoose = use('Mongoose')
const Schema = mongoose.Schema

const Task = {
  name: { type: String }
}
const options = {
  versionKey: false
}
const taskSchema = new Schema(Task, options)

module.exports = mongoose.model('Task', taskSchema)
