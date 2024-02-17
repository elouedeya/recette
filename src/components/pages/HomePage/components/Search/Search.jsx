import styles from "./Search.module.scss";

function Search({ setFilter }) {
    function handelInput(e) {
        const filter = e.target.value;
    
        setFilter(filter.trim().toLowerCase());
      }
    

  return (
    <div
      className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
    >
      <i className="fa-solid fa-magnifying-glass mr-15"></i>
      <input
        type="text"
        onInput={handelInput}
        className="flex-fill"
        placeholder="Recherche"
      />
    </div>
  );
}

export default Search;
