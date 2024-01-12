// build your `Resource` model here
const db = require('../../data/dbConfig')


 async function getResources(){
    const resourceRows = await db('resources as r')


  return resourceRows
}

async function getById(resourceId){
    const result = await db('resources').where('resource_id', resourceId).first()
    return result
}

async function create(resource){
    const [resourceId] = await db('resources').insert(resource)
    const results = await getById(resourceId)


     return results
 }

module.exports = {
    getResources,
    create
}
