import styles from "./productsFilters.module.css";

const ProductsFilters = ({ setFilter, currFilter }) => {
  return (
    <div className={styles.filters}>
      <FilterItem
        value={"all"}
        label={"All"}
        selected={currFilter}
        onClick={setFilter}
      />
      <FilterItem
        value={"beauty"}
        label={"Beauty"}
        selected={currFilter}
        onClick={setFilter}
      />
      <FilterItem
        value={"fragrances"}
        label={"Fragrances"}
        selected={currFilter}
        onClick={setFilter}
      />
      <FilterItem
        value={"furniture"}
        label={"Furniture"}
        selected={currFilter}
        onClick={setFilter}
      />
      <FilterItem
        value={"groceries"}
        label={"Groceries"}
        selected={currFilter}
        onClick={setFilter}
      />
    </div>
  );
};

const FilterItem = ({ label, value, selected, onClick }) => {
  const isSelected = value === selected;
  return (
    <button
      className={`${styles.filterBtn} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};
export default ProductsFilters;
