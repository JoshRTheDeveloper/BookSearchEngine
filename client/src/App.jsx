import React from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider } from '@apollo/client';
import { Outlet, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';

// Create the Apollo client
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // Set your GraphQL server 
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
     
        <>
          <Navbar />
          <Outlet />
        </>
      
    </ApolloProvider>
  );
}

export default App;
