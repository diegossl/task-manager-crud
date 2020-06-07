'use strict'

const mongoose = use('Mongoose')
const Schema = mongoose.Schema

const Task = {
  name: { type: String },
  description: { type: String }
}
const options = {
  versionKey: false
}

const taskSchema = new Schema(Task, options)

taskSchema.virtual("id").get(function () {
  return this._id.toString()
})

module.exports = mongoose.model('Task', taskSchema)
