export const SORT_OPTIONS = [
  {
    id: 'option-one',
    label: 'По популярности',
    value: 'popularity', // можно добавить значение для API
  },
  {
    id: 'option-two',
    label: 'По рейтингу',
    value: 'rating',
  },
  {
    id: 'option-three',
    label: 'Сначала дорогие',
    value: 'price_desc',
  },
  {
    id: 'option-four',
    label: 'Сначала недорогие',
    value: 'price_asc',
  },
  {
    id: 'option-five',
    label: 'По новинкам',
    value: 'newest',
  },
] as const

export type SortOption = (typeof SORT_OPTIONS)[number]
export type SortOptionId = SortOption['id']
export type SortOptionValue = SortOption['value']
