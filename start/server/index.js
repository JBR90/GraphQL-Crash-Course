const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db.js");

const typeDefs = require("./schema.js");

const Animal = require("./resolvers/animal.js");
const Query = require("./resolvers/query.js");
const Category = require("./resolvers/category.js");
const Mutation = require("./resolvers/mutation.js");

const resolvers = {
  Query: Query,
  Mutation: Mutation,
  Animal: Animal,
  Category: Category,
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    mainCards: mainCards,
    animals: animals,
    categories: categories,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
