import React from "react";
import Style from "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, removeFromWishList } from "../../redux/features/data";

const ProductDetails = (props) => {
  const wishlistData = useSelector((state) => state.appData.value.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <div className="right-details-content">
        <h2 className="productName" style={{ "text-transform": "uppercase", "letterSpacing": "2px", "margin": "5px 0" }}>{props.productName} | {props.productType} </h2>
        <hr style={{ margin: "30px 30px 30px 0" , color: "#000"}} />
        <p>{props.productDescription}</p>
        <h2 className="productPrice" style={{ "text-transform": "capitalize" }}>{props.productPrice}/-</h2>
        {
          props.size.map((value) => {
            return (
              <p className="size-varient">{value}</p>
            )
          })
        }
        <br />
        <br />
        <button className="details-btn btn-primary" onClick={() => {
          dispatch(addToCart(props.value));
        }}>Add to Cart</button>
        
        <br />
        <button className="details-btn btn-secondary" onClick={() => {
          dispatch(addToWishlist(props.value));
        }}>Wishlist</button>
      </div>
    </>
  );
};

export default ProductDetails;