import React from 'react';
import styles from "./header.module.scss"

interface HeaderProps {
  title:string,
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({title, children}) => {
  return (
    <header className={styles.header}>
      <section className={styles.header_title}>
        <h4>{title}</h4>
        <span>ID 2372272232</span>
      </section>

    </header>
  );
}

export default Header;
