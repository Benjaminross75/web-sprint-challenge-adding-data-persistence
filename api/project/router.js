// build your `/api/projects` router here
const projects_router = require('express').Router()
const Projects = require('./model')
projects_router.get('/', (req, res, next) =>{
    Projects.getProjects()
    .then(project =>{
       
        res.status(200).json(project)
    })
    .catch(next)
})




projects_router.use((err, req, res, next) =>{ //eslint-disable-line
     res.status(500).json({
        customMessage: 'something went wrong in the projects router',
        message: err.message,
        stack: err.stack
     })
})

module.exports = projects_router
