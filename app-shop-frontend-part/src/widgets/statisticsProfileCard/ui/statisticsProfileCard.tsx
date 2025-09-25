import { BadgeRussianRuble, LayoutGrid, Package, Star } from 'lucide-react'
import { motion } from 'motion/react'

import SpotlightCard from '@/shared/ui/components/SpotlightCard'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/components/ui/card'

import s from './statisticsProfileCard.module.scss'

export function StatisticsProfileCard() {
  return (
    <div className={s['statistics-profile-card']}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.2,
        }}
      >
        <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.5)">
          <Card className="grow">
            <CardHeader>
              <CardDescription>Общая выручка</CardDescription>
              <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                $1, 224.1
              </CardTitle>
              <CardAction>
                <BadgeRussianRuble />
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Положительная динамика
              </div>
              <div className="text-muted-foreground">
                За текущий отчетный период
              </div>
            </CardFooter>
          </Card>
        </SpotlightCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.4,
        }}
      >
        <SpotlightCard spotlightColor="rgba(236, 72, 153, 0.5)">
          <Card className="grow">
            <CardHeader>
              <CardDescription>Товары</CardDescription>
              <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                142
              </CardTitle>
              <CardAction>
                <Package />
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Стабильное количество
              </div>
              <div className="text-muted-foreground">Постоянное обновление</div>
            </CardFooter>
          </Card>
        </SpotlightCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.6,
        }}
      >
        <SpotlightCard spotlightColor="rgba(14, 165, 233, 0.5)">
          <Card className="grow">
            <CardHeader>
              <CardDescription>Категории</CardDescription>
              <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                14
              </CardTitle>
              <CardAction>
                <LayoutGrid />
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Оптимальная структура
              </div>
              <div className="text-muted-foreground">Удобная навигация</div>
            </CardFooter>
          </Card>
        </SpotlightCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.8,
        }}
      >
        <SpotlightCard spotlightColor="rgba(253, 224, 71, 0.5)">
          <Card className="grow">
            <CardHeader>
              <CardDescription>Рейтинг</CardDescription>
              <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                4.8
              </CardTitle>
              <CardAction>
                <Star />
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Высокие оценки
              </div>
              <div className="text-muted-foreground">Довольные клиенты</div>
            </CardFooter>
          </Card>
        </SpotlightCard>
      </motion.div>
    </div>
  )
}
