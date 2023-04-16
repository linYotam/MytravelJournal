import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <i className={`globe icon ${styles.icon}`} />
      <span>My Travel Journal</span>
    </header>
  );
}

export default Header;
