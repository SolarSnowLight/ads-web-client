import React, {ReactElement} from 'react';

import {FiServer, FiTerminal} from "react-icons/fi"
import {BiCube} from "react-icons/bi"

import styles from "./sidebar.module.scss"
import {Logo} from "../index.tsx";
import {Link, NavLink} from "react-router-dom";

interface Link {
  icon: ReactElement,
  link: string,
  text: string
}

const linkList: Array<Link> = [
  {icon: <FiServer className={styles.icon}/>, link: "/servers", text: "Серверы"},
  {icon: <FiTerminal className={styles.icon}/>, link: "/ports", text: "Порты"},
  {icon: <BiCube className={styles.icon}/>, link: "/hosts", text: "Хосты"},
  {icon: <div className={styles.icon}></div>, link: "/auth", text: "Выход"},
]



const renderLinkList: Array<ReactElement> = linkList.map((item, key) => {
  return (
    <NavLink to={item.link} className={({isActive}) => isActive ? styles.active_item_link : styles.item_link} key={key}>
      {item.icon}
      <span>{item.text}</span>
    </NavLink>
  )
})

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
