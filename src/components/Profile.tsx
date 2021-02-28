import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/danilosalvador.png" alt="Danilo Salvador" />
      <div>
        <strong>Danilo Salvador</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Nível {level}
        </p>
      </div>
    </div>
  )
}