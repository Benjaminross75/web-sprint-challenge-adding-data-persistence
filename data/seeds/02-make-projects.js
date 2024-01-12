const projects = [
    {project_name: 'online task manager',
    project_description: 'build task management app',
    project_completed: false},

    {project_name: 'expense tracker app',
    project_description: 'develop mobile app for tracking expenses',
     project_completed: true},

    {project_name: 'contribute to open source project',
    project_description: 'make contributions in open source projects',
      project_completed: true},
]

const resources = [

    {resource_name: 'javascript',
     resource_description: 'script language for web development'},

     {resource_name: 'postgreSQL',
     resource_description: 'open source RDBS'},

     {resource_name: 'Git',
     resource_description: 'version control system'},

]

const tasks = [
    {task_description: 'implement user authentication',
     task_notes: 'utilize secure auth methods',
     task_completed: true,
     project_id: 1,
     },

     {task_description: 'design expense entry database',
     task_notes: 'create user friendly interface',
     task_completed: false,
     project_id: 2,
     },

     {task_description: 'fix bugs',
     task_notes: 'fix bugs in open source project',
     task_completed: false,
     project_id: 3,
     },

   ]

   const project_resources = [
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2},
    {project_id: 1, resource_id: 3},
    {project_id: 2, resource_id: 1},
    {project_id: 2, resource_id: 2},
    {project_id: 2, resource_id: 3},
    {project_id: 3, resource_id: 1},
    {project_id: 3, resource_id: 3},
   ]







exports.seed = async function (knex){
   await knex('projects').insert(projects)
   await knex('resources').insert(resources)
   await knex('tasks').insert(tasks)
   await knex('project_resources').insert(project_resources)
}
