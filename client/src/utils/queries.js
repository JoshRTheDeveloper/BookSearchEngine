import { gql } from '@apollo/client';

//   queries
export const GET_SINGLE_USER = gql`
  query GetSingleUser {
    me {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
      bookCount
    }
  }
`;

