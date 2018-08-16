const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Initialization
const app = express();

// GraphQL Schema
// TODO: Delete this
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello World'
};

app.use(
  '/api',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);
