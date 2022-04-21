import React from 'react'
import GlobalSVGSelector from '../../../../assets/icons/global/GlobalSVGSelector';
import styles from './Days.module.scss';


export const Card = ({day, day_info, icon_id, temp_day, temp_night, info}) => {

  return (
    <div className={styles.card}>
      <div className={styles.day}>{day}</div>
      <div className={styles.day_info}>{day_info}</div>
      <div className={styles.img}>
        <GlobalSVGSelector id={icon_id}/>
      </div>
      <div className={styles.temp_day}>{temp_day}</div>
      <div className={styles.temp_night}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  )
}
