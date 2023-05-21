import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server";
import { typeDefs, resolvers } from "./graphql/schema.js";

// Connect to MongoDB named mydb
mongoose.connect("mongodb://localhost:27017/mydb");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Create an instance of Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
