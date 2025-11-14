import { Button } from '@/shared/ui/components/ui/button'

import s from './signupButton.module.scss'

export function SignupButton() {
  return (
    <Button type="button" className={s['signup-button']}>
      Регистрация
    </Button>
  )
}
