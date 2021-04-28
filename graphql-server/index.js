const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  enum STATE_TAKS {
    TO_DO
    DOING
    DONE
  }

  type Task {
    title: String
    state: STATE_TAKS
  }

  type Query {
    tasks: [Task]
    tasksFiltered(state: STATE_TAKS!): [Task]
  }

  type Mutation {
    updateTitle(pastTitle: String!, newTitle: String!): Task
  }
`;

const tasks = [
  {
    title: 'Fazer Workshop Hack Grrrl',
    state: 'DONE',
  },
  {
    title: 'Apresentar Workshop Hack Grrrl',
    state: 'DOING',
  },
  {
    title: 'Pedir Feedback Workshop Hack Grrl',
    state: 'TO_DO',
  },
];

const resolvers = {
  Query: {
    tasks: () => tasks,
    tasksFiltered: (parent, args, context, info) => {
      let tasksAfterFilter = tasks.filter(task => task.state == args.state);
      return tasksAfterFilter;
    }
  },
  Mutation: {
    updateTitle: (parent, args, context, info) => {
      let index = tasks.findIndex(task => task.title == args.pastTitle);
      tasks[index].title = args.newTitle
      return tasks[index]
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Servidor rodando em ${url}`);
});

