// build your `/api/tasks` router here
const tasks_router = require('express').Router()
const Tasks = require('./model')


tasks_router.get('/', (req, res, next) =>{
    Tasks.getTasks()
    .then(task =>{
        res.status(200).json(task)
    })
    .catch(next)
})


tasks_router.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(500).json({
       customMessage: 'something went wrong in the projects router',
       message: err.message,
       stack: err.stack
    })
})

module.exports = tasks_router
