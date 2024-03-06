const typeDefs = `
  type Book {
    _id: ID!
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
    bookCount: Int!
  }

  input BookInput {
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    getUser(_id: ID!): User
    me: User
    getSingleUser: User
  }

  type Mutation {
    createUser(userInput: UserInput!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
