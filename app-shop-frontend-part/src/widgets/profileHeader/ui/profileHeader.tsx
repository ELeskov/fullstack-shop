import { Link } from 'react-router'
import { Plus } from 'lucide-react'

import { Button } from '@/shared/ui/components/ui/button'
import { Separator } from '@/shared/ui/components/ui/separator'
import { SidebarTrigger } from '@/shared/ui/components/ui/sidebar'

import s from './profileHeader.module.scss'

export function ProfileHeader({
  title,
  creatingFormPath,
}: {
  title: string
  creatingFormPath?: string
}) {
  return (
    <header className={s['profile-header']}>
      <div className={s['profile-header__wrapper']}>
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="!text-lg !font-light">{title}</h1>
        {creatingFormPath && (
          <Link to={creatingFormPath} className="ml-auto">
            <Button type="button">
              <Plus /> Создать
            </Button>
          </Link>
        )}
      </div>
      <Separator />
    </header>
  )
}
