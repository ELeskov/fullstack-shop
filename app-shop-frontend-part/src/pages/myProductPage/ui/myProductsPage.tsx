import { ArrowUpDown } from 'lucide-react'

import { ROUTES } from '@/shared/config'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/components/ui/table'
import { ProfileHeader } from '@/widgets/profileHeader'

import s from './myProductsPage.module.scss'

export function MyProductsPage() {
  return (
    <div className={s['my-product-page']}>
      <ProfileHeader
        title="Мои товары"
        creatingFormPath={ROUTES.profile.root}
      />
      <Table className="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              Название
              <ArrowUpDown size={20} />
            </TableHead>
            <TableHead>
              Название
              <ArrowUpDown size={20} />
            </TableHead>
            <TableHead>
              Название
              <ArrowUpDown size={20} />
            </TableHead>
            <TableHead>
              Название
              <ArrowUpDown size={20} />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
