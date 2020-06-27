import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    password: String
  }

  type LoginResponse {
    token: String
    user: User
  }

  input loginUserInput {
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    email: String!
    name: String
    password: String
  }

  input UpdateUserInput {
    email: String
    name: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
    loginUser(request: loginUserInput): LoginResponse
  }
`
