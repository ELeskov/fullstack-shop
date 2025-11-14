import { Button } from '@/shared/ui/components/ui/button'

import s from './changePasswordButton.module.scss'

export function ChangePasswordButton() {
  return (
    <Button
      variant="outline"
      type="button"
      className={s['change-password-button']}
    >
      Сменить пароль
    </Button>
  )
}
