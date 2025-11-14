import { ShoppingCart } from 'lucide-react'

import { Button } from '@/shared/ui/components/ui/button'

import s from './addBasketButton.module.scss'

export function AddBasketButton() {
  return (
    <Button className={s['add-basket-btn']} type="button">
      <ShoppingCart className={s['add-basket-btn__icon']} />
      <span className={s['add-basket-btn__text']}>Добавить в корзину</span>
    </Button>
  )
}
