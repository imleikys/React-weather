import React from 'react'
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfio/ThisDayInfo';
import styles from './Home.module.scss';


function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
    </div>
  )
}

export default Home;