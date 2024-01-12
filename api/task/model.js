// build your `Task` model here
const db = require('../../data/dbConfig')


async function getTasks(){
    const taskRows = await db('tasks as t')
    // .leftJoin('projects as p', )
    // .select('p.project_name', 'p.project_description')
    taskRows.forEach(task =>{
      if(task.task_completed === 1){
          task.task_completed = true
      } else{
          task.task_completed = false
      }

    })

     return taskRows
}

module.exports = {
    getTasks
}
