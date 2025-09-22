import {
  Album,
  BadgePlus,
  ChartNoAxesColumnIncreasing,
  GalleryHorizontalEnd,
  PaintBucket,
  Settings,
  ShoppingBag,
  UserStar,
} from 'lucide-react'

import { ROUTES } from '@/shared/config'

export const profileNavData = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'О магазине',
      items: [
        {
          title: 'Статистика',
          url: ROUTES.profile.shops.statistics,
          icon: <ChartNoAxesColumnIncreasing />,
        },
        {
          title: 'Мои товары',
          url: ROUTES.profile.shops.products,
          icon: <GalleryHorizontalEnd />,
        },
        {
          title: 'Цвета',
          url: ROUTES.profile.shops.colors,
          icon: <PaintBucket />,
        },
        {
          title: 'Категории',
          url: ROUTES.profile.shops.categories,
          icon: <Album />,
        },
        {
          title: 'Отзывы',
          url: ROUTES.profile.shops.reviews,
          icon: <UserStar />,
        },
        {
          title: 'Покупки',
          url: ROUTES.profile.orders,
          icon: <ShoppingBag />,
        },
        {
          title: 'Настройка магазина',
          url: ROUTES.profile.shops.settings,
          icon: <Settings />,
        },
      ],
    },
  ],
}
