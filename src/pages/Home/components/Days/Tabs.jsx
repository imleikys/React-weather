import React from 'react'
import styles from './Days.module.scss';


export const Tabs = () => {

  const tabs = [
    {
      value: 'На наделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ]

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>{
        tabs.map((tab) => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))
      }</div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  )
}
