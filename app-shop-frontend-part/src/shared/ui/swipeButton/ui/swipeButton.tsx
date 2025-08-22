import { useNavigate } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { motion, useMotionValue, useTransform } from 'motion/react'

import stl from './swipeButton.module.scss'

import { Button } from '@/shared/ui/components/ui/button'

export function SwipeButton() {
  const navigate = useNavigate()

  const x = useMotionValue(0)

  const opacity = useTransform(x, [0, 400], ['1', '00'])

  return (
    <motion.div
      drag="x"
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0 }}
      dragTransition={{ bounceStiffness: 800, bounceDamping: 20 }}
      dragElastic={0.4}
      initial={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{
        duration: 0.7,
        delay: 1.3,
      }}
      style={{ x, opacity: opacity }}
      className={stl['swipe-button__wrapper']}
      onDragEnd={(_, info) => {
        if (info.offset.x > 200) {
          navigate('/catalog')
        }
      }}
    >
      <Button type="button" className={stl['swipe-button']}>
        Перейти к покупкам
        <ChevronRight
          aria-hidden="true"
          className={stl['swipe-button__icon']}
        />
      </Button>
    </motion.div>
  )
}
