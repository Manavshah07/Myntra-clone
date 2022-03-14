import "./Product.css";
import "../../helper.css";
import { NavLink } from "react-router-dom";
import { addToWishlist } from "../../redux/features/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Product({
  id,
  title,
  price,
  gender,
  image,
  brand,
  category
})

 {
  var value = {id, title, price, gender, image, brand,category}
  const productData = useSelector((state) => state.appData.value.data)
  const dispatch = useDispatch();
  var linkto = "/details/" + id;
  return (
    <>
      <div className="left-content-border">
        <div className="right-content">
          <div className="cards">
              <div className="card">
                  <div className="slider">
                      <NavLink to={linkto}>
                      <img src={image} alt="" className="product-image" />
                      </NavLink>
                  </div>
                  <div className="card-info">
                      <h3 className="card-category">{brand}</h3>
                      <h5 className="card-title">{title}</h5>
                      <p className="card-price">{price}</p>
                      <div className="wishlist-wrapper">
                      <button className="wishlist" onClick={() => { dispatch(addToWishlist(value)) }}> Add to Wishlist </button>
                      </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
    </>
  );
}
