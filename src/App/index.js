import { hot } from 'react-hot-loader';
import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import Content from './Content';
import client from '../apollo/client';
import styles from './styles';

const message = 'Graphql app';

const App = ({ classes }) => {
  return (
    <ApolloProvider client={client}>
      <main className={classes.app}>
        <h2>
          <span role="img" aria-label="Apollo">
            🚀
          </span>
          {message}
        </h2>
        <Content />
      </main>
    </ApolloProvider>
  );
};

App.propTypes = {
  classes: object.isRequired,
};

export default hot(module)(withStyles(styles)(App));
