import React, { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import Product from "../Product/Product";
import "./Listing.css";

const Listing = () => {
  const { filteredProducts } = useContext(ProductsContext);

  return (
    <div className="container-fluid">
      {filteredProducts.length ? (
        filteredProducts.map((item) => <Product key={item.id} {...item} />)
      ) : (
        <p>No Products match! Clear the filters!</p>
      )}
    </div>
  );
};

export default Listing;
