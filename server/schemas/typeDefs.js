const { gpl } = require("apollo-server-express");

const typeDefs = gpl`
type User {
    _id: ID!
    username:String!
    email: String!
    password: String!
    savedBooks: [Book]
}
type Book {
    authors: String
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
}
`;
