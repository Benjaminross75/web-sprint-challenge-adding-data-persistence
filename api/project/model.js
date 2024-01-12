// build your `Project` model here
const db = require('../../data/dbConfig')


async function getProjects(){
  const projectRows = await db('projects as p')
  projectRows.forEach(project =>{
    if(project.project_completed === 1){
        project.project_completed = true
    } else{
        project.project_completed = false
    }

  })

   return projectRows

}

async function getById(projectId){
    const result = await db('projects').where('project_id', projectId).first()
    return result
}

async function create(project){
   const [projectId] = await db('projects').insert(project)
   const results = await getById(projectId)
   if(results.project_completed === 1){
    results.project_completed = true
   } else{
    results.project_completed = false
   }

    return results
}

module.exports = {
    getProjects,
    create
}
