export interface IColor {
  id: string
  name: string
  value: string
  createdAt: string
  storeId: string
}

export type IColorCreate = Pick<IColor, 'name' | 'value'>
