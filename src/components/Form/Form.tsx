import React from 'react';
import {Logo} from "../index.tsx";
import styles from "./form.module.scss"

const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <Logo fill="#1A1C1E"/>

      <input type="text" className={styles.input} placeholder="User ID"/>
      <input type="text" className={styles.input} placeholder="Controller IP"/>
      <input type="text" className={styles.input}  placeholder="Пароль"/>

      <div className="flex justify-between items-center w-[245px] h-[56px]">
        <label htmlFor="">
          <input type="radio"/>
          <span>Запомнить</span>
        </label>

        <span>Забыли пароль?</span>
      </div>

      <button className="w-[256px] h-[48px] rounded-[9px] bg-main text-white">Войти</button>
    </form>
  );
}

export default Form;
