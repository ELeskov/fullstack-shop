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
import type { IColor } from '@/shared/types'
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

import s from './colorsDataTable.module.scss'

const columnHelper = createColumnHelper<IColor>()

const defaultColumns = [
  columnHelper.accessor('name', {
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
    // Пример: 40 условных единиц ширины
    size: 40, // Базовый размер
    minSize: 30, // Минимальный размер
    maxSize: 200, // Максимальный размер
  }),

  columnHelper.accessor('value', {
    cell: (info) => (
      <div
        className={`h-6 w-6 rounded-[50%] border`} // Убран bg-[${info.getValue()}], он не работает в Tailwind так
        style={{ backgroundColor: info.getValue() }}
      ></div>
    ),
    header: ({ column }) => (
      <Button
        className="px-0!"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Цвет
        <ArrowUpDown />
      </Button>
    ),
    // Пример: 20 условных единиц ширины
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
    // Пример: 30 условных единиц ширины
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

const colors: IColor[] = [
  {
    id: '1',
    name: 'Красный',
    value: '#FF0000',
    createdAt: '2023-01-15T10:30:00Z',
    storeId: 'store-001',
  },
  {
    id: '2',
    name: 'Зелёный',
    value: '#00FF00',
    createdAt: '2023-02-20T14:45:00Z',
    storeId: 'store-001',
  },
  {
    id: '3',
    name: 'Синий',
    value: '#0000FF',
    createdAt: '2023-03-10T09:15:00Z',
    storeId: 'store-001',
  },
  {
    id: '4',
    name: 'Чёрный',
    value: '#000000',
    createdAt: '2023-04-05T16:20:00Z',
    storeId: 'store-001',
  },
  {
    id: '5',
    name: 'Белый',
    value: '#FFFFFF',
    createdAt: '2023-05-12T11:00:00Z',
    storeId: 'store-001',
  },
  {
    id: '6',
    name: 'Фиолетовый',
    value: '#800080',
    createdAt: '2023-06-18T13:30:00Z',
    storeId: 'store-001',
  },
  {
    id: '7',
    name: 'Оранжевый',
    value: '#FFA500',
    createdAt: '2023-07-22T08:45:00Z',
    storeId: 'store-001',
  },
  {
    id: '8',
    name: 'Жёлтый',
    value: '#FFFF00',
    createdAt: '2023-08-30T17:10:00Z',
    storeId: 'store-001',
  },
  {
    id: '9',
    name: 'Розовый',
    value: '#FFC0CB',
    createdAt: '2023-09-14T12:25:00Z',
    storeId: 'store-001',
  },
  {
    id: '10',
    name: 'Голубой',
    value: '#00CED1',
    createdAt: '2023-10-01T15:50:00Z',
    storeId: 'store-001',
  },
]

export const ColorsDataTable = () => {
  const [colorsCollection, setColorsCollection] = useState<IColor[]>(colors)
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
    <div className={s['colors-data-table']}>
      <div className={s['colors-data-table__top']}>
        <Input
          placeholder="Найти по названию"
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
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
      <div className={s['colors-data-table__body']}>
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
      <div className={s['colors-data-table__bottom']}>
        <div className={s['colors-data-table__bottom-rows-of-page-info']}>
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
            s['colors-data-table__bottom-page-info'],
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
