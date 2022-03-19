import React from 'react'
import { ThisDay } from './components/ThisDay/ThisDay';
import styles from './Home.module.scss';


function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDay />
      </div>
    </div>
  )
}

export default Home;