import { LogOut } from 'lucide-react'

import { Button } from '@/shared/ui/components/ui/button'

import s from './logoutButton.module.scss'

export function LogoutButton() {
  return (
    <Button variant="destructive" type="button" className={s['logout-button']}>
      <LogOut />
      Выйти
    </Button>
  )
}
