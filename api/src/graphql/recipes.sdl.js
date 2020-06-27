import gql from 'graphql-tag'

export const schema = gql`
  type Recipe {
    id: Int!
    name: String!
    description: String!
    imageUrl: String!
    likes: Int!
    userId: Int
    User: User
  }

  type Query {
    recipes: [Recipe!]!
  }

  type Mutation {
    createRecipe(request: CreateRecipeInput): Recipe
    addLike(request: addLikeInput): Recipe
  }

  input addLikeInput {
    recipeId: Int
    likes: Int
  }

  input CreateRecipeInput {
    name: String!
    description: String!
    imageUrl: String!
    likes: Int
    userId: Int
  }

  input UpdateRecipeInput {
    name: String
    description: String
    imageUrl: String
    likes: Int
    userId: Int
  }
`
