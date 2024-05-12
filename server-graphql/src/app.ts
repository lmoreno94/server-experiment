import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from './schemas'
import { authenticate } from "./middleware/auth";

const app = express();

app.use(authenticate);
app.use(cors());
app.use( express.static('public') );
app.use( express.urlencoded({
    extended: true 
}));
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema 
}));

// app.use(router);

export default app;

