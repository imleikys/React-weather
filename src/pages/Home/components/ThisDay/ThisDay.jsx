import React from 'react'
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';
import styles from './ThisDay.module.scss';


export const ThisDay = () => {
  return (
    <div className={styles.this__day}>
      <div className={styles.this__day_top}>
        <div className={styles.this__day_text}>
          <p className={styles.temp}>20°</p>
          <p className={styles.day}>Сегодня</p>
        </div>
        <div className={styles.this__day_img}>
          <GlobalSVGSelector id="sun"/>
        </div>
      </div>
      <div className={styles.this__day_bot}>
        <p className={styles.this__day_time}>Время: 21:54</p>
        <p className={styles.this__day_city}>Город: Санкт-Петербург</p>
      </div>
    </div>
  )
}
