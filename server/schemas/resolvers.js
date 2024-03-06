import { authMiddleware } from '../utils/auth.js';
const { AuthenticationError } = require('apollo-server-express');
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');

const resolvers = {
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      try {
        const user = await createUser({ username, email, password });
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
    login: async (_, { email, password }) => {
      try {
        const token = await login(email, password);
        return { token };
      } catch (err) {
        throw new AuthenticationError('Invalid credentials');
      }
    },
    saveBook: async (_, { bookInput }, context) => {
      try {
        authMiddleware(context); 
        const updatedUser = await saveBook(context.user._id, bookInput);
        return updatedUser;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteBook: async (_, { bookId }, context) => {
      try {
        authMiddleware(context); 
        const updatedUser = await deleteBook(context.user._id, bookId);
        return updatedUser;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Query: {
    getSingleUser: async (_, __, context) => {
      try {
        authMiddleware(context); 
        const user = await getSingleUser(context.user._id);
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
