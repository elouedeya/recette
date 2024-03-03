import { useState } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import { seedRecipes } from "./data/seed";
import Admin from "./components/pages/HomePage/Admin/Admin";
import HomePage from "./components/pages/HomePage/HomePage";



seedRecipes();
function App() {
  const [page, setPage] = useState("homepage");
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "homepage" && <HomePage />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;
