import { gql } from 'urql'

export const ReviewCoreFragment = gql`
  fragment ReviewCore on Review {
    __typename
    id
    rating
    text
    user
    business
    createdAt
    updatedAt
  }
`

export const ReviewListItemFragment = gql`
  fragment ReviewListItem on Review {
    ...ReviewCore
  }
  ${ReviewCoreFragment}
`
