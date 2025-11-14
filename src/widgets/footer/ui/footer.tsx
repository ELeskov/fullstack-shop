import s from './footer.module.scss'

export function Footer() {
  return (
    <footer className={s['footer']}>
      <p>e.leskov © {new Date().getFullYear()} Все права защищены.</p>
    </footer>
  )
}
