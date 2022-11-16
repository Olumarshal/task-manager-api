const Task = require('../models/task.model')

const getAllTasks = (req, res) => {
    res.send("Get all tasks")
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send("Update task")
}

const deleteTask = (req, res) => {
    res.send("Delete task")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}