import { ReviewCoreFragment } from 'graphql/fragments/review'
import { gql } from 'urql'

export const CREATE_REVIEW = gql`
  mutation createReview($data: CreateReviewInput!) {
    createReview(data: $data) {
      ...ReviewDetail
    }
  }
  ${ReviewCoreFragment}
`

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`

export const EDIT_REVIEW = gql`
  mutation editReview($id: ID!, $data: EditReviewInput!) {
    editReview(id: $id, data: $data) {
      ...ReviewDetail
    }
  }
  ${ReviewCoreFragment}
`
