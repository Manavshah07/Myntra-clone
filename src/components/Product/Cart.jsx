import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/features/data";
import "./Modal.css";
import "./Product.css";

const Cart = () => {
	const cartData = useSelector(state => state.appData.value.cart)
	const dispatch = useDispatch();
	//  removeFromWishList
	return (
		<>
			<div className="modal-wrapper">
				<div className="inner-head">
					<div className="flexed flex-end">X</div>
					<div className="right-content">
						{cartData.map((value, index) => {
							const { id, brand, title, category, image, price, visible  } =
								value;
							return true ? (
								<div className="inner-card container" key={index}>
									<div className="card-wrapper">
										<div className="slider">
											<img src={image} alt="" className="product-image" />
										
										</div>
										<div className="card-info">
											<h3 className="inner-card-category">{brand}</h3>
											<p className="inner-card-title">{title}</p>
											<p className="inner-card-price">{price}</p>
											<div className="wishlist-wrapper">
												<button
													className="wishlist"
													onClick={() => {
														dispatch(removeFromCart(value));
													}}
												>
													Remove from Cart
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
	)
}
export default Cart;
