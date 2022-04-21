import React from 'react';
import GlobalSVGSelector from '../../assets/icons/global/GlobalSVGSelector';
import {ThisDayItem} from '../../pages/Home/components/ThisDayInfio/ThisDayItem';
import styles from './Popup.module.scss';


export const Popup = () => {

  const items = [
    {img_id: 'temperature', title: 'Температура', text: '20° - ощущается как 17°'},
    {img_id: 'pressure', title: 'Давление', text: '765 мм ртутного столба - нормальное'},
    {img_id: 'precipitation', title: 'Осадки', text: 'Без осадков'},
    {img_id: 'wind', title: 'Ветер', text: '3 м/с юго-запад - легкий ветер'},
  ]

  return (
    <>
    <div className={styles.blur}></div>
    <div className={styles.popup}>
      <div className={styles.day}>
        <div className={styles.day__temp}>20°</div>
          <div className={styles.day__name}>Среда</div>
          <div className={styles.img}>
            <GlobalSVGSelector id="sun" />
          </div>
          <div className={styles.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={styles.day__city}>
            Время: <span>Санкт-Петербург</span>
          </div>
      </div>
      <div className={styles.this__day_info}>
        <div className={styles.this__day_info_items}>
          {
            items.map(item => (
              <ThisDayItem img_id={item.img_id} title={item.title} text={item.text} key={item.img_id}/>
            ))
          }
        </div>
      </div>
      <div className={styles.close}>
        <GlobalSVGSelector id="close"/>
      </div>
    </div>
    </>
  )
}