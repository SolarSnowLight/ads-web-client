import React from 'react';

import {FiServer, FiTerminal} from "react-icons/fi"
import {BiCube} from "react-icons/bi"

import styles from "./sidebar.module.scss"
import Logo from "../Logo/Logo.tsx";
import {Link} from "react-router-dom";


const linkList: Array<object> = [
  {icon:  <FiServer className={styles.icon}/>,link: "/servers", text: "Серверы"},
  {icon: <FiTerminal className={styles.icon}/>,link: "/ports", text: "Порты"},
  {icon: <BiCube className={styles.icon}/>,link: "/hosts", text: "Хосты"},
  {icon: <div className={styles.icon}></div>,link: "/", text: "Выход"},
]

const renderLinkList = linkList.map((item) => {
  return (
        <Link to={item.link} className={styles.item_link}>
          {item.icon}
          <span>{item.text}</span>
        </Link>
  )})

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo fill="#ffff"/>
      <ul className={styles.wrapper_link}>
        {renderLinkList}
      </ul>

    </aside>
  );
}

export default Sidebar;
