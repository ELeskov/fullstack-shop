import { useState } from 'react'
import { Link } from 'react-router'
import clsx from 'clsx'
import { CircleUserRound, Heart, Menu, ShoppingCart } from 'lucide-react'

import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/shared/ui/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/components/ui/sheet'
import { ListItem } from '@/shared/ui/listItem'
import { Logo } from '@/shared/ui/logo'

import s from './header.module.scss'

export function Header() {
  const [isAuthorization, setIsAuthorization] = useState(true)

  return (
    <header className={s['header']}>
      <div className={s['header__body']}>
        <Logo className={s['header-logo']} />
        <NavigationMenu
          viewport={false}
          aria-label="Меню навигации"
          className="hidden-mobile"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
              <NavigationMenuContent className="border-white/10 z-50">
                <ul
                  className="grid gap-2 md:w-[400px] lg:w-[600px]
            lg:grid-cols-[1fr_1fr_1fr]"
                >
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/catalog"
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Каталог
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/catalog/laptop" title="Laptop">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ListItem>
                  <ListItem href="/catalog/watch" title="Watch">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ListItem>
                  <ListItem href="/catalog/phone" title="Phone">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ListItem>
                  <ListItem href="/catalog/Tablet" title="Tablet">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
          <div className={clsx(s['header__actions'], 'hidden-mobile')}>
            <ul className={clsx(s['header__actions-list'], s['header-list'])}>
              <li className={s['header__actions-item']}>
                <Link
                  className={s['header__actions-link']}
                  aria-label="Избранные товары"
                  to={ROUTES.like}
                >
                  <Heart
                    aria-hidden="true"
                    className={s['header__actions-icon']}
                    size={24}
                  />
                </Link>
              </li>
              <li className={s['header__actions-item']}>
                <Link
                  className={s['header__actions-link']}
                  aria-label="Корзина товаров"
                  to={''}
                >
                  <ShoppingCart
                    aria-hidden="true"
                    className={s['header__actions-icon']}
                    size={24}
                  />
                </Link>
              </li>
              <li className={s['header__actions-item']}>
                <Link
                  className={s['header__actions-link']}
                  aria-label="Профиль пользователя"
                  to={''}
                >
                  <CircleUserRound
                    aria-hidden="true"
                    className={s['header__actions-icon']}
                    size={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={clsx(s['header__auth-btn'], 'hidden-mobile')}>
            <Link to={ROUTES.login}>
              <Button
                type="button"
                className={s['header__auth-btn-login']}
                variant="outline"
              >
                Войти
              </Button>
            </Link>
            <Link to={ROUTES.signup}>
              <Button type="button" className={s['header__auth-btn-signup']}>
                Регистрация
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
