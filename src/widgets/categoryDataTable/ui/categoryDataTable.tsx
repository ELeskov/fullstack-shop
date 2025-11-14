import { useState } from 'react'
import { useNavigate } from 'react-router'

import {
  type ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Plus,
} from 'lucide-react'

import { ROUTES } from '@/shared/config'
import type { ICategory } from '@/shared/types'
import { Button } from '@/shared/ui/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/components/ui/dropdown-menu'
import { Input } from '@/shared/ui/components/ui/input'
import { Label } from '@/shared/ui/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/components/ui/table'

import s from './categoryDataTable.module.scss'

const columnHelper = createColumnHelper<ICategory>()

const defaultColumns = [
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: ({ column }) => (
      <Button
        className="px-0!"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Название
        <ArrowUpDown />
      </Button>
    ),
    size: 40,
    minSize: 30,
    maxSize: 200,
  }),

  columnHelper.accessor('description', {
    cell: (info) => info.getValue(),
    header: () => <span>Описание</span>,

    size: 20,
    minSize: 20,
    maxSize: 50,
  }),

  columnHelper.accessor('createdAt', {
    cell: (info) => {
      const formattedDate = new Date(info.getValue()).toLocaleDateString(
        'ru-RU',
      )
      return formattedDate
    },
    header: ({ column }) => (
      <Button
        className="px-0!"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Дата создания
        <ArrowUpDown />
      </Button>
    ),
    size: 30,
    minSize: 25,
    maxSize: 150,
  }),

  columnHelper.display({
    id: 'actions',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Открыть меню</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Редактировать</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-500">Удалить</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableHiding: false,
    size: 10,
    minSize: 10,
    maxSize: 50,
  }),
]

const categories: ICategory[] = [
  {
    id: '1',
    title: 'Электроника',
    description: 'Электронные устройства и аксессуары',
    createdAt: '2023-01-15T10:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '2',
    title: 'Аудио',
    description: 'Аудиооборудование и наушники',
    createdAt: '2023-02-20T11:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '3',
    title: 'Гаджеты',
    description: 'Умные устройства и носимая электроника',
    createdAt: '2023-03-10T12:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '4',
    title: 'Игры',
    description: 'Игровые консоли и аксессуары',
    createdAt: '2023-04-05T13:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '5',
    title: 'Бытовая техника',
    description: 'Техника для дома и кухни',
    createdAt: '2023-05-12T14:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '6',
    title: 'Фототехника',
    description: 'Фотоаппараты, камеры и объективы',
    createdAt: '2023-06-18T15:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '7',
    title: 'Транспорт',
    description: 'Электросамокаты, велосипеды и транспортные средства',
    createdAt: '2023-07-22T16:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '8',
    title: 'Мебель',
    description: 'Мебель для дома и офиса',
    createdAt: '2023-08-30T17:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '9',
    title: 'Кухня',
    description: 'Кухонные принадлежности и техника',
    createdAt: '2023-09-14T18:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '10',
    title: 'Умный дом',
    description: 'Устройства для умного дома и автоматизации',
    createdAt: '2023-10-01T19:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '11',
    title: 'Одежда',
    description: 'Одежда, обувь и аксессуары',
    createdAt: '2023-11-05T20:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '12',
    title: 'Аксессуары',
    description: 'Различные аксессуары и гаджеты',
    createdAt: '2023-12-10T21:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '13',
    title: 'Хобби',
    description: 'Игрушки, конструкторы и хобби',
    createdAt: '2024-01-15T22:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '14',
    title: 'Здоровье',
    description: 'Товары для здоровья и фитнеса',
    createdAt: '2024-02-20T23:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '15',
    title: 'Гейминг',
    description: 'Игровые аксессуары и оборудование',
    createdAt: '2024-03-01T00:00:00Z',
    storeId: 'store-001',
  },
]

export function CategoryDataTable() {
  const [colorsCollection, setColorsCollection] =
    useState<ICategory[]>(categories)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const navigate = useNavigate()

  const table = useReactTable({
    data: colorsCollection,
    columns: defaultColumns,
    state: {
      rowSelection,
      pagination,
      sorting,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),

    onRowSelectionChange: setRowSelection,

    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  })
  return (
    <div className={s['category-data-table']}>
      <div className={s['category-data-table__top']}>
        <Input
          placeholder="Найти по названию"
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
          name="data-table-search-product"
        />
        <Button
          className="ml-auto"
          onClick={() => navigate(ROUTES.profile.shops.colors.create)}
        >
          Создать цвет
          <Plus />
        </Button>
      </div>
      <div className={s['category-data-table__body']}>
        <Table>
          <TableHeader className="bg-muted">
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
      <div className={s['category-data-table__bottom']}>
        <div className={s['category-data-table__bottom-rows-of-page-info']}>
          <Label htmlFor="rows-per-page">Строк на странице</Label>
          <Select
            defaultValue={'10'}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger id="rows-per-page" className="w-20">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top" align="center">
              <SelectGroup>
                {[10, 20, 30, 40, 50].map((countItems) => (
                  <SelectItem key={countItems} value={`${countItems}`}>
                    {countItems}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div
          className={clsx(
            s['category-data-table__bottom-page-info'],
            'text-muted-foreground select-none',
          )}
        >
          <span>Страница</span>
          {table.getState().pagination.pageIndex + 1} <span>из</span>
          {table.getPageCount()}
        </div>

        <div className="flex gap-x-3">
          <Button
            variant={'outline'}
            size="icon"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft />
          </Button>
          <Button
            variant={'outline'}
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={'outline'}
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </Button>
          <Button
            variant={'outline'}
            size="icon"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
