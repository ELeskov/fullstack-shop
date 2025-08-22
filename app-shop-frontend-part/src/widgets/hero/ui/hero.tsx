import { motion } from 'motion/react'

import {
  animationDescriptionHeroText,
  animationTitleHeroText,
} from '@widgets/hero/lib'

import stl from './hero.module.scss'

import { SwipeButton } from '@/shared/ui/swipeButton'

export function Hero() {
  return (
    <section className={stl['hero']}>
      <div className={stl['hero__wrapper']}>
        <h1 className={stl['hero__title']}>
          {animationTitleHeroText.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: 'blur(50px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: 'easeOut',
              }}
              style={{
                display: 'inline-block',
                marginRight: '10px',
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className={stl['hero__description']}>
          {animationDescriptionHeroText.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: 'blur(50px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: 'easeOut',
              }}
              style={{ display: 'inline-block', marginRight: '6px' }}
            >
              {word}
            </motion.span>
          ))}
        </p>
        <SwipeButton />
      </div>
    </section>
  )
}
