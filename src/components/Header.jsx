import styles from "./Header.module.scss";
import recetteTr from "../assets/images/recetteTr.png";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      
      <div className="flex-fill">
        <img src={recetteTr} alt="logo recette" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-basket-shopping mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div className="calc" onClick={() => setShowMenu(false)}></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
