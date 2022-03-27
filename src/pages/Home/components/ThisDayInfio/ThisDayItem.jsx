import React from "react";
import GlobalSVGSelector from "../../../../assets/icons/global/GlobalSVGSelector";
import styles from "./ThisDayItem.module.scss";

export const ThisDayItem = ({ img_id, title, text }) => {
  console.log(img_id);
  return (
    <div className={styles.this__day_item}>
      <div className={styles.icon}>
        <GlobalSVGSelector id={img_id} />
      </div>
      <div className={styles.this__day_title}>{title}</div>
      <div className={styles.this__day_text}>{text}</div>
    </div>
  );
};
