import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import GlobalSVGSelector from '../../assets/icons/global/GlobalSVGSelector';
import styles from './Header.module.scss';


export const Header = () => {

  const customSelectStyles = {
    control: styles => ({
      ...styles, 
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100',
    })
  }

  const SelectOptions = [ 
    { value: "city1", label: "Волгоград"},
    { value: "city2", label: "Волжский"},
    { value: "city3", label: "Москва"},
    { value: "city4", label: "Санкт-Петербург"},
  ]

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <GlobalSVGSelector id="header-logo" />
        </Link>
        <div className={styles.logo_text}>React Weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSVGSelector id="drop" />
        </div>
        <Select defaultValue={SelectOptions[0]} options={SelectOptions} styles={customSelectStyles} />
      </div>
    </header>
  );
}