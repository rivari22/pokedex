import { ApolloClient, InMemoryCache } from '@apollo/client';
import { URL_GRAPHQL } from './config';

const clientGraphql = new ApolloClient({
  uri: URL_GRAPHQL,
  cache: new InMemoryCache(),
});

export default clientGraphql;