
import Header from "./components/Header/Header"
import styles from "./App.module.scss"
import HomePage from "./components/pages/HomePage/HomePage"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
