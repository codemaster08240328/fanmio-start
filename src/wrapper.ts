import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

async function callGraphQL<T>(query: any, variables?: {}): Promise<GraphQLResult<T>> {
  return (await API.graphql(graphqlOperation(query, variables))) as GraphQLResult<T>;
}

export default callGraphQL;
