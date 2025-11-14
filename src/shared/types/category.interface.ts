export interface ICategory {
  id: string
  title: string
  description: string
  createdAt: string
  storeId: string
}

export type ICategoryCreate = Pick<ICategory, 'title' | 'description'>
