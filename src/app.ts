import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGO_URI } from './utils/secrets';
import router from './router';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

// Create Express server
const app = express();

app.use(cors());

// configure app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

// Connect to database
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database ready');
  })
  .catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
  });

// Initialize graphql schema
const schema = buildSchema(`
    type Query{
      hello: String
    }
  `);

const root = {
  hello: () => 'Hello World'
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema, // Must be provided
    rootValue: root,
    graphiql: true // Enable GraphiQL when server endpoint is accessed in browser
  })
);

app.set('port', process.env.PORT || 5200);

export default app;
