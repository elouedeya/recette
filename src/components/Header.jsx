import styles from "./Header.module.scss"
import recetteTr from "../assets/images/recetteTr.png"


function Header() {
  return (
  <header className={`${styles.header} d-flex flex-row align-items-center`}>
    <i className="fa-solid fa-bars mr-15"></i>
    <div className="flex-fill">
      <img src={recetteTr} alt="logo recette" />
    </div>
    <ul>
      <button className="mr-5 btn btn-reverse-primary">
      <i className="fa-solid fa-basket-shopping mr-5"></i>
      <span>panier</span>
      </button>
      <button className="btn btn-primary">connexion</button>
    </ul>
  </header>
  );
}

export default Header;
