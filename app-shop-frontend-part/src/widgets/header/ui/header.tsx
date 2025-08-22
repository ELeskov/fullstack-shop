import { useState } from 'react'
import { Link } from 'react-router'
import clsx from 'clsx'
import { CircleUserRound, Heart, Menu, ShoppingCart } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@shared/ui/components/ui/sheet'

import stl from './header.module.scss'

import { Button } from '@/shared/ui/components/ui/button'
import { Logo } from '@/shared/ui/logo'
import { CATEGORIES } from '@/widgets/header/lib'

export function Header() {
  const [isAuthorization, setIsAuthorization] = useState(true)

  return (
    <header className={stl['header']}>
      <div className={stl['header__body']}>
        <Logo className={stl['header-logo']} />

        <nav
          aria-label="Меню навигации"
          className={clsx(stl['header__menu'], 'hidden-mobile')}
        >
          <ul className={clsx(stl['header__menu-list'], stl['header-list'])}>
            {CATEGORIES.map((category, i) => (
              <li
                key={i}
                className={clsx(stl['header__menu-item'], stl['header-item'])}
              >
                <Link
                  to={''}
                  className={clsx(stl['header__menu-link'], stl['header-link'])}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="visible-mobile">
          <Sheet>
            <SheetTrigger>
              <Menu style={{ cursor: 'pointer' }} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {isAuthorization ? (
          <div className={clsx(stl['header__actions'], 'hidden-mobile')}>
            <ul
              className={clsx(stl['header__actions-list'], stl['header-list'])}
            >
              <li className={stl['header__actions-item']}>
                <Link
                  className={stl['header__actions-link']}
                  aria-label="Избранные товары"
                  to={''}
                >
                  <Heart
                    aria-hidden="true"
                    className={stl['header__actions-icon']}
                    size={24}
                  />
                </Link>
              </li>
              <li className={stl['header__actions-item']}>
                <Link
                  className={stl['header__actions-link']}
                  aria-label="Корзина товаров"
                  to={''}
                >
                  <ShoppingCart
                    aria-hidden="true"
                    className={stl['header__actions-icon']}
                    size={24}
                  />
                </Link>
              </li>
              <li className={stl['header__actions-item']}>
                <Link
                  className={stl['header__actions-link']}
                  aria-label="Профиль пользователя"
                  to={''}
                >
                  <CircleUserRound
                    aria-hidden="true"
                    className={stl['header__actions-icon']}
                    size={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={clsx(stl['header__auth-btn'], 'hidden-mobile')}>
            <Button
              type="button"
              className={stl['header__auth-btn-login']}
              variant="outline"
            >
              Войти
            </Button>
            <Button type="button" className={stl['header__auth-btn-signup']}>
              Регистрация
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
