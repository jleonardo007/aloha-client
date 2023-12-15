import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { CurrentUserProvider } from 'src/context/current-user';
import { apolloClient } from './apollo-client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
