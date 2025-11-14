import {
  Album,
  ChartNoAxesColumnIncreasing,
  CircleUserRound,
  GalleryHorizontalEnd,
  PaintBucket,
  Settings,
  ShoppingBag,
  UserStar,
} from 'lucide-react'

import shopImage from '@/shared/assets/icons/favicon-bg-white.svg'
import { ROUTES } from '@/shared/config'

export const profileNavData = {
  shops: [
    {
      shopImage: shopImage,
      title: 'VK',
    },
    {
      shopImage: shopImage,
      title: 'yandex',
    },
    {
      shopImage: shopImage,
      title: 'google',
    },
  ],
  navMain: [
    {
      title: 'Аккаунт',
      items: [
        {
          title: 'Профиль',
          url: ROUTES.profile.root,
          icon: <CircleUserRound />,
        },
      ],
    },
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
          url: ROUTES.profile.shops.products.root,
          icon: <GalleryHorizontalEnd />,
        },
        {
          title: 'Цвета',
          url: ROUTES.profile.shops.colors.root,
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
