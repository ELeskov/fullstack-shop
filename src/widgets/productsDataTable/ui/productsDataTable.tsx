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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Plus,
} from 'lucide-react'

import { ROUTES } from '@/shared/config'
import type { IProductDataTable } from '@/shared/types/product.interface'
import { Button } from '@/shared/ui/components/ui/button'
import { Checkbox } from '@/shared/ui/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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

import { productsDataTable } from '../data/data'

import s from './productsDataTable.module.scss'

const columnHelper = createColumnHelper<IProductDataTable>()

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
        className="px-0!"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Название
        <ArrowUpDown />
      </Button>
    ),
  }),

  columnHelper.accessor('category', {
    cell: (info) => info.getValue().title,
    header: ({ column }) => (
      <Button
        className="px-0!"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Категория
        <ArrowUpDown />
      </Button>
    ),
  }),

  columnHelper.accessor('color', {
    cell: (info) => {
      const color = info.getValue()
      return (
        <div
          className="h-6 w-6 rounded-[50%] border"
          style={{ backgroundColor: color.value }}
        ></div>
      )
    },
    header: () => <span>Цвет</span>,
  }),

  columnHelper.accessor('createdAt', {
    cell: (info) => {
      const createdAt = info.getValue()
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date(createdAt))
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
  }),

  columnHelper.accessor('price', {
    cell: (info) => {
      const price = info.getValue() // number
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
      }).format(price)
    },
    header: ({ column }) => (
      <Button
        className="px-0!"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Цена
        <ArrowUpDown />
      </Button>
    ),
  }),

  columnHelper.display({
    id: 'actions',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View customer</DropdownMenuItem>
          <DropdownMenuItem>View payment details</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableHiding: false,
  }),
]

export function ProductsDataTable() {
  const [collectionProducts, setCollectionProducts] =
    useState<IProductDataTable[]>(productsDataTable)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const navigate = useNavigate()

  const table = useReactTable({
    data: collectionProducts,
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
    <div className={s['data-table-wrapper']}>
      <div className={s['data-table__top']}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Колонки
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
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
          onClick={() => navigate(ROUTES.profile.shops.products.create)}
        >
          Создать товар
          <Plus />
        </Button>
      </div>
      <div className={s['data-table__body']}>
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
      <div className={s['data-table__bottom']}>
        <div
          className={clsx(
            s['data-table__bottom-row-selection-info'],
            'text-muted-foreground select-none',
          )}
        >
          {table.getFilteredSelectedRowModel().rows.length} <span>из</span>
          {table.getFilteredRowModel().rows.length} <span>выбрано</span>
        </div>
        <div className={s['data-table__bottom-rows-of-page-info']}>
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
            s['data-table__bottom-page-info'],
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
