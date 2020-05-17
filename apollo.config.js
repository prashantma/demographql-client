module.exports = {
  client: {
    service: {
      name: 'todo',
      url: 'http://localhost:4000/graphql',
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
};
