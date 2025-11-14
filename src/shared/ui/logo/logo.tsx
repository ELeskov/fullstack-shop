import { Link } from 'react-router'

import clsx from 'clsx'

import logo from '@/shared/assets/icons/logo-collapse.svg'
import { ROUTES } from '@/shared/config'

import s from './logo.module.scss'

export function Logo({ className }: { className?: string }) {
  return (
    <Link to={ROUTES.home} className={clsx(className)} aria-label="На главную">
      <img
        src={logo}
        className={s['logo__img']}
        alt="e leskov X shop"
        width={200}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
