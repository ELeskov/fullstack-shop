import type { IUser } from './user.interface'

export interface IReview {
  id: string
  createdAt: string
  text: string
  rating: number
  user: IUser
}

export type IReviewCreate = Pick<IReview, 'rating' | 'text'>
