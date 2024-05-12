const { Task }= require('../models')

const resolvers = {
    Query: {
        hello: () => 'Hello World',
        getAllTask: async() => {
            const task= await Task.find()
            return task
        },
        async getTask( parent, args, context, info ) {
            const task= await Task.findById(args.id)
            return task
        }
    },
    Mutation: {
        createTask: async( parent, args, context, info ) => {
            const { title, description } = args.task;
            const newTask = new Task({title, description})
            await newTask.save()
            return newTask
        },
        async deleteTask( parent, {id}, context, info ) {
            await Task.findByIdAndDelete(id)
            return 'Task deleted'
        },
        async updateTask( parent, {task, id}, context, info ) {
            const taskBD = await Task.findByIdAndUpdate(id, {
                $set: task
            }, {new: true})
            return taskBD
        }
    }
}

module.exports={ resolvers }