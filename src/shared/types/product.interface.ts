import type { ICategory } from './category.interface'
import type { IColor } from './color.interface'
import type { IReview } from './review.interface'
import type { IStore } from './store.interface'

export interface IProduct {
  id: string
  title: string
  price: number
  description: string
  createdAt: string
  category: ICategory
  reviews: IReview[]
  color: IColor
  store: IStore
}

export interface IProductCreate
  extends Omit<IProduct, 'id' | 'reviews' | 'store' | 'category' | 'color'> {
  categoryId: string
  colorId: string
}

export type IProductDataTable = Omit<IProduct, 'reviews' | 'store'>
