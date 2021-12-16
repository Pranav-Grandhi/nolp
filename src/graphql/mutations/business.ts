import { ReviewCoreFragment } from 'graphql/fragments/review'
import { gql } from 'urql'

export const CREATE_BUSINESS = gql`
  mutation createReview($data: CreateReviewInput!) {
    createReview(data: $data) {
      ...ReviewDetail
    }
  }
  ${ReviewCoreFragment}
`
