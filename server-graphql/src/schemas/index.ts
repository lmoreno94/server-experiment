import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GREETING } from './Queries/Greeting';

import { LOGIN_USER, REGISTER_USER } from './Mutations/Auth';

import { CREATE_USER, DELETE_USER, UPDATE_USER } from './Mutations/User';
import { GET_ALL_USERS, GET_ONE_USER } from './Queries/User';

import { CREATE_POST, DELETE_POST, UPDATE_POST } from './Mutations/Post';
import { GET_ALL_POST, GET_ONE_POST } from './Queries/Posts';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getAllUsers: GET_ALL_USERS,
        getOneUser: GET_ONE_USER,
        getAllPosts: GET_ALL_POST,
        getOnePost: GET_ONE_POST
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER,
        registerUser: REGISTER_USER,
        loginUser: LOGIN_USER,
        createPost: CREATE_POST,
        deletePost: DELETE_POST,
        updatePost: UPDATE_POST
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})