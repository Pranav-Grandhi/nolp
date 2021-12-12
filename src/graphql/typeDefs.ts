import { gql } from 'apollo-server-micro'

export default gql`
  scalar Date

  type Review {
    id: ID
    createdAt: Date
    updatedAt: Date
    rating: Int
    text: String
    user: User
    business: Business
  }

  type Business {
    id: ID
    createdAt: Date
    updatedAt: Date
    rating: Int
    name: String
    location: String
    about: String
    owner: User
    reviews: [Review]
  }

  type User {
    id: ID
    name: String
    email: String
    image: String
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    user(id: String!): User
    business(id: String!): Business
    review(id: String!): Review
  }

  input CreateReviewInput {
    rating: Int
    text: String
    businessID: String
  }

  input EditReviewInput {
    rating: Int
    text: String
  }

  input CreateBusinessInput {
    name: String
    location: String
    about: String
  }

  input EditBusinessInput {
    name: String
    location: String
    about: String
  }

  type Mutation {
    createReview(data: CreateReviewInput!): Review
    editReview(id: ID!, data: EditReviewInput): Review
    deleteReview(id: ID!): Boolean
    createBusiness(data: CreateBusinessInput): Review
    editBusiness(id: ID!, data: EditBusinessInput): Review
    deleteBusiness(id: ID!): Boolean
  }
`
