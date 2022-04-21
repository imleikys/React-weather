import React from 'react'
import { Days } from './components/Days/Days';
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
      <Days></Days>
    </div>
  )
}

export default Home;