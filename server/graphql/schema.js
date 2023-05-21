import { Book } from "../models/Book.js";

export const typeDefs = /* GraphQL */ `
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        createBook(title: String, author: String): Book
        createMultipleBooks(books: [BookInput!]!): [Book]
    }

    input BookInput {
        title: String!
        author: String!
    }
`;

export const resolvers = {
    Query: {
        books: async () => {
            // Fetch books from MongoDB using Mongoose
            return Book.find();
        },
    },
    Mutation: {
        createBook: async (_, { title, author }) => {
            const book = new Book({ title, author });
            await book.save();
            return book;
        },
        createMultipleBooks: async (_, { books }) => {
            const createdBooks = await Book.insertMany(books);
            return createdBooks;
        },
    },
};
