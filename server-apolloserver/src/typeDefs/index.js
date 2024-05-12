const { gql }= require('apollo-server-express');

const typeDefs = gql`

    type Task {
        id: ID
        title: String
        description: String
    }

    input TaskInput {
        title: String
        description: String
    }

    type Query {
        hello: String
        getAllTask: [Task]
        getTask(id: ID): Task
    }

    type Mutation {
        createTask( task: TaskInput ): Task
        deleteTask( id: ID ): String
        updateTask( id: ID, task: TaskInput ): Task
    }
`

module.exports= { typeDefs }