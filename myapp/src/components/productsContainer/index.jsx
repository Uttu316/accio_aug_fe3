import { useEffect, useState } from "react";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasProducts = isDone && products.length !== 0;
  const noProducts = isDone && products.length === 0;

  return (
    <div>
      {isLoading && <h2>Loading Products.....</h2>}
      {noProducts && <h2>Products not available</h2>}
      {isError && <h2>Something went wrong</h2>}
      {hasProducts && products.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};
export default ProductsContainer;
