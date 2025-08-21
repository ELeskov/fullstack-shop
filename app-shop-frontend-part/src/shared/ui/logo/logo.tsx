import { Link } from 'react-router'
import clsx from 'clsx'

import logo from '@shared/assets/icons/logo-collapse.svg'

import stl from './logo.module.scss'

import { ROUTES } from '@/shared/config'

export function Logo({ className }: { className?: string }) {
  return (
    <Link to={ROUTES.home} className={clsx(className)} aria-label="На главную">
      <img
        src={logo}
        className={stl['logo__img']}
        alt="e leskov X shop"
        width={200}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
