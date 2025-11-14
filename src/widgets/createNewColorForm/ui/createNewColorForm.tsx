import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import { Button } from '@/shared/ui/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/shared/ui/components/ui/field'
import { Input } from '@/shared/ui/components/ui/input'

import s from './createNewColorForm.module.scss'

export function CreateNewColorForm() {
  const [color, setColor] = useState('#FFFFFF')

  return (
    <div className={s['create-new-color-form']}>
      <form>
        <FieldGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="color-name">Название</FieldLabel>
              <Input id="color-name" placeholder="Белый" required />
            </Field>

            <Field>
              <FieldLabel htmlFor="color-value">Значение</FieldLabel>
              <Input
                id="color-value"
                placeholder="#ffffff"
                required
                value={color}
              />
            </Field>
            <HexColorPicker color={color} onChange={setColor} />
          </FieldGroup>
          <Field orientation="horizontal">
            <Button type="submit">Создать</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
