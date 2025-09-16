import {
  Album,
  BadgePlus,
  ChartNoAxesColumnIncreasing,
  ChevronsUpDown,
  GalleryHorizontalEnd,
  PaintBucket,
  Settings,
  ShoppingBag,
  UserStar,
} from 'lucide-react'

import sidebarIcon from '@/shared/assets/icons/sidebar-icon.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/components/ui/dropdown-menu'

import s from './sidebarProfile.module.scss'

export function SidebarProfile() {
  return (
    <aside className={s['sidebar']}>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-within:!outline-none focus-visible:!outline-none focus:!outline-none">
          <header className={s['sidebar-header']} tabIndex={0}>
            <div className={s['sidebar-header__wrapper']}>
              <img
                src={sidebarIcon}
                alt=""
                loading="lazy"
                className={s['sidebar-header__shop-icon']}
              />
              <div className={s['sidebar-header__shop-title-wrapper']}>
                <span className={s['sidebar-header__shop-title']}>VK</span>
              </div>
            </div>
            <ChevronsUpDown size={20} />
          </header>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="right">
          <DropdownMenuItem className="max-w-2xs w-xs">
            <div className="flex gap-x-2 items-center line-clamp-1">
              <img src={sidebarIcon} alt="" />
              <span className="">VK</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="max-w-2xs w-xs">
            <div className="flex gap-x-2 items-center line-clamp-1">
              <img src={sidebarIcon} alt="" />
              <span className="">VK</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:!text-green-400">
            <BadgePlus className="!size-5" />
            <span className="text-base">Создать</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ul className={s['sidebar-list']}>
        <li className={s['sidebar-item']}>
          <ChartNoAxesColumnIncreasing
            size={24}
            className={s['sidebar-icon']}
          />
          <span className={s['sidebar-label']}>Статистика</span>
        </li>
        <li className={s['sidebar-item']}>
          <Album size={24} className={s['sidebar-icon']} />
          <span className={s['sidebar-label']}>Категории</span>
        </li>
        <li className={s['sidebar-item']}>
          <PaintBucket size={24} className={s['sidebar-icon']} />
          <span className={s['sidebar-label']}>Цвета</span>
        </li>
        <li className={s['sidebar-item']}>
          <GalleryHorizontalEnd size={24} className={s['sidebar-icon']} />
          <span className={s['sidebar-label']}>Мои товары</span>
        </li>
        <li className={s['sidebar-item']}>
          <UserStar size={24} className={s['sidebar-icon']} />
          <span className={s['sidebar-label']}>Отзывы</span>
        </li>
        <li className={s['sidebar-item']}>
          <ShoppingBag size={24} className={s['sidebar-icon']} />
          <span className={s['sidebar-label']}>Покупки</span>
        </li>
        <li className={s['sidebar-item']}>
          <Settings size={24} className={s['sidebar-icon']} />
          <span className={s['sidebar-label']}>Настройки магазина</span>
        </li>
      </ul>
      <footer></footer>
    </aside>
  )
}
