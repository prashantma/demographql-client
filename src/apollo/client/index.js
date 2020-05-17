import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const env = process.env.NODE_ENV || 'development';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      /*
      getAllProjects: (_, args, { getCacheKey }) =>
        getCacheKey({ __typename: 'Project', id: args && args.projectId }),
      getProjectsForUser: (_, args, { getCacheKey }) =>
        getCacheKey({ __typename: 'Project', id: args && args.projectId }),
      getUsersForProject: (_, args, { getCacheKey }) =>
        getCacheKey({ __typename: 'AccountUser', id: args && args.userId }),
      */
    },
  },
});

cache.writeData({
  data: {
    isConnected: true,

    /**
     * login information
     */
    login: {
      id: '_login',
      userId: '',
      __typename: '_login',
    },

    /**
     * state for user tab
     */
    userView: {
      id: '_userView',
      selectedProject: '',
      addEditTodoId: -1,
      __typename: '_userView',
    },

    /**
     * state for project tab
     */
    projectView: {
      id: '_projectView',
      __typename: '_projectView',
    },
  },
});

const httpLink = new HttpLink({
  uri:
    env === 'development'
      ? 'http://localhost:4000/graphql'
      : 'https://demographql-sevenseasteam.azurewebsites.net/graphql',
  credentials: 'include',
  headers: {
    origin:
      env === 'development'
        ? 'http://localhost:5000'
        : 'https://demographql-sevenseasteam-client.azurewebsites.net',
  },
});

const wsLink = new WebSocketLink({
  uri:
    env === 'development'
      ? 'ws://localhost:4000/graphql'
      : 'wss://demographql-sevenseasteam.azurewebsites.net/graphql',
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache,
  link,
  connectToDevTools: true,
  typeDefs,
  resolvers,
});

export default client;
