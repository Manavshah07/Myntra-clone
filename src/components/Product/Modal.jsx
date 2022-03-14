import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishList } from "../../redux/features/data";
import "./Modal.css";
import "./cards.css";
import { NavLink } from "react-router-dom";

const Modal = () => {
  const wishlistData = useSelector((state) => state.appData.value.wishlist);
  console.log(wishlistData);
  const dispatch = useDispatch();
  //  removeFromWishList
  return (
    <>
      <div className="modal-wrapper" id="modalwrapper">
        <div className="inner-head">
          <div className="flexed flex-end">X</div>
          <div className="right-content">
            {wishlistData.map((value, index) => {
                console.log(value);
              const { id, brand, title, category, image, price, visible } =
                value;
                console.log(visible);
                var linkto = "/details/" + id;
              return true ? (
                <div className="container inner-card" key={index}>
                  <div className="card-wrapper">
                    <div className="slider">
                      <NavLink to={linkto}>
                        <img src={image} alt="" className="inner-product-image" />
                      </NavLink>
                    </div>
                    <div className="inner-card-info">
                      <h3 className="inner-card-category">{brand}</h3>
                      <p className="inner-card-title">{title}</p>
                      <p className="inner-card-price">{price}</p>
                      <div className="wishlist-wrapper">
                        <button
                          className="wishlist"
                          onClick={() => {
                            dispatch(addToCart(value));
                          }}
                        >

                          Add to Cart
                        </button>


                        <br />
                        <button
                          className="wishlist"
                          onClick={() => {
                            dispatch(removeFromWishList(value));
                          }}
                        >
                          Remove from Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
            {/* {JSON.stringify(wishlistData, 3, 3)} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
