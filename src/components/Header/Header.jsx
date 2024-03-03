import { useState } from "react";
import styles from "./Header.module.scss";
import recetteTr from "../../assets/images/recetteTr.png";

import HeaderMenu from "./components/HeaderMenu";

function Header({setPage}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      
      <div className="flex-fill">
        <img src={recetteTr} alt="logo recette"  onClick={()=>setPage('homepage')}/>
      </div>
      <ul className={styles.headerList}>
        <button className="mr-15 btn btn-reverse-primary" onClick={()=>setPage('admin')}>Ajouter une recette</button>
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
          <HeaderMenu setPage={setPage} />
        </>
      )}
    </header>
  );
}

export default Header;
