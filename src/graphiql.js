import gql from 'graphql-tag';

const client = {
  query: () => {},
};

client
  .query({
    query: gql`
      query getAllForUser($projectId: String!, $userId: String!) {
        getAllForUser(projectId: $projectId, userId: $userId) {
          id
          description
          completionDate
        }
      }
    `,
    variables: {
      userId: 'USER0001',
      projectId: 'PROJ0001',
    },
  })
  .then((result) => console.log(result));
