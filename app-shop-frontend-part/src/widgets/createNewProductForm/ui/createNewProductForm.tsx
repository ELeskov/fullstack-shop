import { Controller, type SubmitHandler, useForm } from 'react-hook-form'

import { ImagePlus } from 'lucide-react'

import { Button } from '@/shared/ui/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/shared/ui/components/ui/field'
import { Input } from '@/shared/ui/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/components/ui/select'

import s from './createNewProductForm.module.scss'

interface Form {
  title: string
  price: number
  category: string
  color: string
}
export function CreateNewProductForm() {
  const { register, handleSubmit, control } = useForm<Form>({
    defaultValues: {
      title: '',
      price: 1,
      category: '',
      color: '',
    },
  })

  const onSubmit: SubmitHandler<Form> = (data) => console.log(data)
  return (
    <form
      className={s['create-new-product-form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            <Field className="w-fit">
              <FieldLabel htmlFor="product-image-upload">Картинки</FieldLabel>
              <Button
                id="product-image-upload"
                variant={'secondary'}
                type="button"
              >
                <ImagePlus />
                Загрузить картинки
              </Button>
              <FieldDescription>
                Загрузите картинки для вашего товара
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <FieldLabel htmlFor="product-title">Название</FieldLabel>
              <Input
                {...register('title')}
                id="product-title"
                name="title"
                placeholder="Смартфон Apple iPhone 17 Pro 256 ГБ синий"
                type="text"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="product-price">Цена (руб)</FieldLabel>
              <Input
                {...register('price')}
                id="product-price"
                name="price"
                type="number"
                placeholder="128 999 ₽"
                min={1}
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <FieldLabel htmlFor="product-category">Категория</FieldLabel>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    name="product-category"
                    required
                  >
                    <SelectTrigger id="product-category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartphones">Смартфоны</SelectItem>
                      <SelectItem value="laptops">Ноутбуки</SelectItem>
                      <SelectItem value="tablets">Планшеты</SelectItem>
                      <SelectItem value="headphones">Наушники</SelectItem>
                      <SelectItem value="smartwatches">Смарт-часы</SelectItem>
                      <SelectItem value="accessories">Аксессуары</SelectItem>
                      <SelectItem value="audio">Аудиотехника</SelectItem>
                      <SelectItem value="tv">Телевизоры</SelectItem>
                      <SelectItem value="photo">Фото и видео</SelectItem>
                      <SelectItem value="gaming">Игры и приставки</SelectItem>
                      <SelectItem value="appliances">
                        Бытовая техника
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="product-color">Цвет</FieldLabel>

              <Controller
                control={control}
                name="color"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    name="product-color"
                    required
                  >
                    <SelectTrigger id="product-color">
                      <SelectValue placeholder="Выберите цвет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="black">Чёрный</SelectItem>
                      <SelectItem value="white">Белый</SelectItem>
                      <SelectItem value="silver">Серебристый</SelectItem>
                      <SelectItem value="space-gray">
                        Космический серый
                      </SelectItem>
                      <SelectItem value="gold">Золотой</SelectItem>
                      <SelectItem value="rose-gold">Розовое золото</SelectItem>
                      <SelectItem value="blue">Синий</SelectItem>
                      <SelectItem value="red">Красный</SelectItem>
                      <SelectItem value="green">Зелёный</SelectItem>
                      <SelectItem value="purple">Фиолетовый</SelectItem>
                      <SelectItem value="yellow">Жёлтый</SelectItem>
                      <SelectItem value="pink">Розовый</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
          </FieldGroup>
        </FieldSet>

        <Field orientation="horizontal">
          <Button type="submit">Создать</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
