import React from 'react'
import styles from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';

export const ThisDayInfo = () => {
  const items = [
    {img_id: 'temperature', title: 'Температура', text: '20° - ощущается как 17°'},
    {img_id: 'pressure', title: 'Давление', text: '765 мм ртутного столба - нормальное'},
    {img_id: 'precipitation', title: 'Осадки', text: 'Без осадков'},
    {img_id: 'wind', title: 'Ветер', text: '3 м/с юго-запад - легкий ветер'},
  ]

  return (
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {
          items.map(item => (
            <ThisDayItem img_id={item.img_id} title={item.title} text={item.text} key={item.img_id}/>
          ))
        }
      </div>
      <img className={styles.this__day_info_img} src={cloud} alt="ReactWeather.Cloud" />
    </div>
  )
}
