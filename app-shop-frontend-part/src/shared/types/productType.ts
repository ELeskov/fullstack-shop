import z from 'zod'

const schema = z.object({
  title: z.string().min(1, 'Название обязательно'),
  price: z
    .number('Заначение должно быть числом')
    .min(1, 'Цена должна быть больше 0'),
  category: z.string().min(1, 'Выберите категорию'),
  color: z.string().min(1, 'Выберите цвет'),
  description: z.string(),
  images: z
    .array(z.instanceof(File), 'Добавьте хотя бы одно изображение')
    .min(1, 'Добавьте хотя бы одно изображение')
    .max(10, 'Максимум 10 изображений'),
})

type ProductData = z.infer<typeof schema>

export { type ProductData, schema }
