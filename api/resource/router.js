// build your `/api/resources` router here
const resources_router = require('express').Router()
const Resources = require('./model')
resources_router.get('/', (req, res, next) =>{
    Resources.getResources()
    .then(resource =>{
        res.status(200).json(resource)
    })
    .catch(next)
})

resources_router.post('/', async (req, res, next) =>{
    try{
        const data = await Resources.create(req.body)
        res.json(data)
    }
    catch (err){
        next(err)
    }
})



resources_router.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(500).json({
       customMessage: 'something went wrong in the projects router',
       message: err.message,
       stack: err.stack
    })
})

module.exports = resources_router
