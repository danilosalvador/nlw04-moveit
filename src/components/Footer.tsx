import styles from '../styles/components/Footer.module.css'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>{'Rocketseat@NLW#04'} ❤ <a href="https://danilosalvador.dev" target="_blank">DaniloSalvador.dev</a></p>
    </div>
  )
}