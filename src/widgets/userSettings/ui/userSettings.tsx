import { useState } from 'react'
import { useForm } from 'react-hook-form'

import clsx from 'clsx'
import { Pen, UserRoundX } from 'lucide-react'

import { ChangePasswordButton } from '@/features/changePasswordButton'
import { LogoutButton } from '@/features/logoutButton'
import avatar from '@/shared/assets/icons/favicon-bg-white.svg'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/ui/components/ui/avatar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/components/ui/form'
import { Input } from '@/shared/ui/components/ui/input'

import s from './userSettings.module.scss'

export function UserSettings() {
  const form = useForm()
  const [isShowIcon, setIsShowIcon] = useState(false)

  return (
    <section className={s['user-settings']}>
      <div className={s['user-settings__content']}>
        <div className={s['user-settings__preview-info-container']}>
          <div className={s['user-settings__image-wrapper']}>
            <Avatar
              onMouseEnter={() => setIsShowIcon(true)}
              onMouseLeave={() => setIsShowIcon(false)}
              className={s['user-settings__image']}
            >
              <AvatarImage src={avatar} />
              <AvatarFallback>
                <UserRoundX size={20} />
              </AvatarFallback>
            </Avatar>
            <Pen
              className={clsx(
                `absolute bottom-0 right-0 hidden`,
                isShowIcon ? 'block!' : '',
              )}
              size={18}
            />
          </div>

          <div className={s['user-settings__information']}>
            <div className={s['user-settings__name']}>Egor</div>
            <div className={s['user-settings__email']}>
              leskovegor490@gmail.com
            </div>
          </div>
        </div>
        <Form {...form}>
          <div className={s['user-settings__form-content']}>
            <div className={s['user-settings__input-group']}>
              <FormField
                control={form.control}
                name="firstName"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Имя" name="firstName" />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surname"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Фамилия"
                        name="surname"
                        autoComplete="family-name"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={s['user-settings__input-group']}>
              <FormField
                control={form.control}
                name="email"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tel"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        name="tel"
                        autoComplete="tel"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Form>

        <div className={s['user-settings__bottom-items']}>
          <div className="flex gap-3">
            <LogoutButton />
            <ChangePasswordButton />
          </div>
        </div>
      </div>
    </section>
  )
}
