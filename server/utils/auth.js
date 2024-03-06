const jwt = require('jsonwebtoken');

// Set token secret and expiration date needed.
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Authenticated route function
  authMiddleware: function (context) {
    const token = context.headers.authorization;

    if (!token) {
      throw new Error('You have no token!');
    }

    try {
      const { data } = jwt.verify(token, secret, { expiresIn: expiration });
      context.user = data;
    } catch (err) {
      console.error('Invalid token:', err.message);
      throw new Error('Invalid token!');
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
