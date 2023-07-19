import React from 'react';

import styles from "./banner.module.scss"

import demo from "../../assets/img/Demo.svg";
import lrectangle from "../../assets/img/LRectangle.svg";
import ltriangle from "../../assets/img/LTriangle.svg";
import mtriangle from "../../assets/img/MTriangle.svg";
import striangle from "../../assets/img/STriangle.svg";
import sellipse from "../../assets/img/SEllipse.svg";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner_container}>
      <div className="h-[500px]">
        <img src={demo} alt="demo" className="m-[75px] relative z-10" />
        <img src={lrectangle} alt="lrectangle" className="relative bottom-[650px]"/>
        <img src={ltriangle} alt="ltriangle" className="relative bottom-[750px] left-[370px]"/>
        <img src={mtriangle} alt="mtriangle" className="relative bottom-[1120px] left-[750px]"/>
        <img src={striangle} alt="striangle" className="relative bottom-[1270px] left-[800px]"/>
        <img src={sellipse} alt="sellipse" className="relative bottom-[1370px] left-[750px]"/>
      </div>

      <div className={styles.title}>
        <h1>Простое развёртывание систем</h1>
        <span>Данная система решит проблему развёртывания <br/> функциональных модулей на удалённом хосте</span>
      </div>
    </section>
  );
}

export default Banner;
