import { Controller, type SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { Button } from '@/shared/ui/components/ui/button'
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from '@/shared/ui/components/ui/dropzone'
import {
  Field,
  FieldDescription,
  FieldError,
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
import { Textarea } from '@/shared/ui/components/ui/textarea'

import s from './createNewProductForm.module.scss'

const schema = z.object({
  title: z.string().min(1, 'Название обязательно'),
  price: z
    .number('Значение должно быть числом')
    .min(1, 'Цена должна быть больше 0'),
  category: z.string().min(1, 'Выберите категорию'),
  color: z.string().min(1, 'Выберите цвет'),
  description: z.string(),
  images: z
    .array(z.instanceof(File), 'Добавьте хотя бы одно изображение')
    .min(1, 'Добавьте хотя бы одно изображение')
    .max(10, 'Максимум 10 изображений'),
})

type ProductSchema = z.infer<typeof schema>

export function CreateNewProductForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ProductSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      price: 1,
      category: '',
      color: '',
      description: '',
      images: undefined,
    },
  })

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form
      className={s['create-new-product-form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            <Field>
              <Controller
                name="images"
                control={control}
                render={({ field }) => (
                  <Dropzone
                    accept={{ 'image/*': [] }}
                    maxFiles={5}
                    maxSize={1024 * 1024 * 10} // 10MB
                    minSize={1024} // 1KB
                    onDrop={(acceptedFiles) => {
                      field.onChange(acceptedFiles)
                    }}
                    src={field.value}
                  >
                    <DropzoneEmptyState />
                    <DropzoneContent />
                  </Dropzone>
                )}
              />
              {errors.images && (
                <FieldError>{errors.images.message}</FieldError>
              )}
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
              />
              {errors.title && <FieldError>{errors.title.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="product-price">Цена (руб)</FieldLabel>
              <Input
                {...register('price', { valueAsNumber: true })}
                id="product-price"
                name="price"
                type="number"
                placeholder="128 999 ₽"
                min={1}
              />
              {errors.price && <FieldError>{errors.price.message}</FieldError>}
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
                  >
                    <SelectTrigger id="product-category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartphones">Телефоны</SelectItem>
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
              {errors.category && (
                <FieldError>{errors.category.message}</FieldError>
              )}
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
              {errors.color && <FieldError>{errors.color.message}</FieldError>}
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldGroup>
          <FieldLabel htmlFor="product-description">Описание</FieldLabel>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Textarea
                onChange={field.onChange}
                value={field.value}
                id="product-description"
              />
            )}
          />
          {errors.description && (
            <FieldError>{errors.description.message}</FieldError>
          )}
        </FieldGroup>
        <Field orientation="horizontal">
          <Button type="submit">Создать товар</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
