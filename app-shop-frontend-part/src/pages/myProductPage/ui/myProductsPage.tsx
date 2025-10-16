import { useState } from 'react'
import { ArrowUpDown, ChevronDown } from 'lucide-react'

import { ProfileHeader } from '@/widgets/profileHeader'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/components/ui/button'
import { Checkbox } from '@/shared/ui/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/ui/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/components/ui/table'

import s from './myProductsPage.module.scss'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Product = {
  id: string
  title: string
  description: string
  price: number
  color?: string
  category: string
  createdAt: Date
}
const columnHelper = createColumnHelper<Product>()

const defaultColumns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),

  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Название
        <ArrowUpDown />
      </Button>
    ),
  }),

  columnHelper.accessor('category', {
    cell: (info) => info.getValue(),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Категория
        <ArrowUpDown />
      </Button>
    ),
  }),

  columnHelper.accessor('price', {
    cell: (info) => info.getValue(),
    header: ({ column }) => (
      <Button
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Цена
        <ArrowUpDown />
      </Button>
    ),
  }),
]

export function MyProductsPage() {
  const [collectionProducts, setCollectionProducts] = useState<Product[]>([
    {
      id: '1',
      title: 'Смартфон iPhone 15 Pro',
      description: 'Флагманский смартфон с процессором A17 Pro и камерой 48 МП',
      price: 99990,
      color: 'Титановый серый',
      category: 'Электроника',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      title: 'Ноутбук MacBook Air M2',
      description: 'Легкий и мощный ноутбук с дисплеем Liquid Retina',
      price: 124990,
      color: 'Серебристый',
      category: 'Электроника',
      createdAt: new Date('2024-01-20'),
    },
    {
      id: '3',
      title: 'Беспроводные наушники Sony WH-1000XM5',
      description: 'Наушники с шумоподавлением и автономностью 30 часов',
      price: 29990,
      color: 'Черный',
      category: 'Аудио',
      createdAt: new Date('2024-02-05'),
    },
    {
      id: '4',
      title: 'Умные часы Apple Watch Series 9',
      description: 'Умные часы с функцией измерения кислорода в крови',
      price: 45990,
      color: 'Midnight',
      category: 'Гаджеты',
      createdAt: new Date('2024-02-10'),
    },
    {
      id: '5',
      title: 'Игровая консоль PlayStation 5',
      description: 'Новейшая игровая консоль с поддержкой 4K',
      price: 64990,
      category: 'Игры',
      createdAt: new Date('2024-01-25'),
    },
    {
      id: '6',
      title: 'Кофемашина DeLonghi Magnifica',
      description:
        'Автоматическая кофемашина для приготовления эспрессо и капучино',
      price: 54990,
      color: 'Серебристый',
      category: 'Бытовая техника',
      createdAt: new Date('2024-03-01'),
    },
    {
      id: '7',
      title: 'Фотокамера Canon EOS R6',
      description: 'Беззеркальная камера с матрицей 20 МП и стабилизацией',
      price: 189990,
      category: 'Фототехника',
      createdAt: new Date('2024-02-15'),
    },
    {
      id: '8',
      title: 'Электрический самокат Xiaomi Pro 2',
      description: 'Самокат с запасом хода 45 км и мощным мотором',
      price: 34990,
      color: 'Черный',
      category: 'Транспорт',
      createdAt: new Date('2024-03-05'),
    },
    {
      id: '9',
      title: 'Кожаный диван Chesterfield',
      description: 'Классический кожаный диван с каретной стяжкой',
      price: 125000,
      color: 'Коричневый',
      category: 'Мебель',
      createdAt: new Date('2024-01-30'),
    },
    {
      id: '10',
      title: 'Набор кухонных ножей Zwilling',
      description: 'Профессиональный набор из 6 ножей с керамическим покрытием',
      price: 15990,
      category: 'Кухня',
      createdAt: new Date('2024-02-20'),
    },
    {
      id: '11',
      title: 'Беспроводная колонка JBL Flip 6',
      description: 'Портативная водонепроницаемая колонка с мощным звуком',
      price: 12990,
      color: 'Синий',
      category: 'Аудио',
      createdAt: new Date('2024-03-10'),
    },
    {
      id: '12',
      title: 'Электронная книга PocketBook 740',
      description: 'Читалка с дисплеем E Ink 7.8 дюймов и подсветкой',
      price: 23990,
      color: 'Черный',
      category: 'Электроника',
      createdAt: new Date('2024-02-25'),
    },
    {
      id: '13',
      title: 'Умный домофон Ring Video Doorbell',
      description: 'Видеодомофон с датчиком движения и ночным видением',
      price: 17990,
      category: 'Умный дом',
      createdAt: new Date('2024-03-08'),
    },
    {
      id: '14',
      title: 'Спортивные кроссовки Nike Air Max',
      description: 'Беговые кроссовки с технологией Air для амортизации',
      price: 12990,
      color: 'Белый',
      category: 'Одежда',
      createdAt: new Date('2024-02-28'),
    },
    {
      id: '15',
      title: 'Рюкзак для ноутбука The North Face',
      description: 'Вместительный рюкзак с отделением для ноутбука 15.6',
      price: 8990,
      color: 'Черный',
      category: 'Аксессуары',
      createdAt: new Date('2024-03-12'),
    },
    {
      id: '16',
      title: 'Электрический гриль Tefal GC722',
      description: 'Компактный гриль с антипригарным покрытием',
      price: 7990,
      color: 'Красный',
      category: 'Кухня',
      createdAt: new Date('2024-02-18'),
    },
    {
      id: '17',
      title: 'Монитор Samsung Odyssey G7',
      description: 'Игровой монитор 32 дюйма с изогнутым экраном 240 Гц',
      price: 65990,
      category: 'Электроника',
      createdAt: new Date('2024-01-22'),
    },
    {
      id: '18',
      title: 'Набор LEGO Technic Porsche 911',
      description: 'Конструктор из 1580 деталей для сборки модели Porsche',
      price: 14990,
      category: 'Хобби',
      createdAt: new Date('2024-03-03'),
    },
    {
      id: '19',
      title: 'Электрическая зубная щетка Oral-B iO',
      description: 'Умная зубная щетка с технологией магнитного привода',
      price: 12990,
      color: 'Розовое золото',
      category: 'Здоровье',
      createdAt: new Date('2024-02-14'),
    },
    {
      id: '20',
      title: 'Термокружка Stanley Classic',
      description: 'Термос с вакуумной изоляцией сохраняет температуру 24 часа',
      price: 4990,
      color: 'Зеленый',
      category: 'Аксессуары',
      createdAt: new Date('2024-03-15'),
    },
  ])

  const table = useReactTable({
    data: collectionProducts,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className={s['my-product-page']}>
      <ProfileHeader
        title="Мои товары"
        creatingFormPath={ROUTES.profile.root}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mb-5">
          <Button variant="outline" className="ml-auto">
            Колонки
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-muted sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.placeholderId
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={defaultColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
