import { Swiper, SwiperSlide } from 'swiper/react'

import { ProductCard } from '@/entities/productCard'

import s from './hitsProduct.module.scss'

import 'swiper/css'

export function HitsProduct() {
  return (
    <section className={s['hits-product']}>
      <h2 className={s['hits-product__title']}>Хиты продаж</h2>
      <p className={s['hits-product__description']}>
        Самые популярные товары нашего магазина.
      </p>
      <div className={s['hits-product__product-list']}>
        <Swiper slidesPerView="auto" spaceBetween={30}>
          {[0, 0, 0, 0, 0, 0, 0].map(() => (
            <SwiperSlide className={s['hits-product__slide']}>
              <ProductCard className={s['hits-product__item']} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
