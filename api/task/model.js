// build your `Task` model here
const db = require('../../data/dbConfig')


async function getTasks(){
    const taskRows = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        't.project_id',
        'p.project_name',
        'p.project_description'
    );

    taskRows.forEach(task =>{
      if(task.task_completed === 1){
          task.task_completed = true
      } else{
          task.task_completed = false
      }

    })

     return taskRows
}

async function getById(taskId){
    const result = await db('tasks').where('task_id', taskId).first()
    return result
}

async function create(task){
    const [taskId] = await db('tasks').insert(task)
    const results = await getById(taskId)
    if(results.task_completed === 1){
        results.task_completed = true
    } else{
        results.task_completed = false
    }


     return results
 }


module.exports = {
    getTasks,
    create
}
