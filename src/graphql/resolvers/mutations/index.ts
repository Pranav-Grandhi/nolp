import requiresUser from 'graphql/helpers/requiresUser'

import { createBusiness, deleteBusiness, editBusiness } from './business'
import { createReview, deleteReview, editReview } from './review'

export default {
  createBusiness: requiresUser(createBusiness),
  editBusiness: requiresUser(editBusiness),
  deleteBusiness: requiresUser(deleteBusiness),
  createReview: requiresUser(createReview),
  editReview: requiresUser(editReview),
  deleteReview: requiresUser(deleteReview),
}
