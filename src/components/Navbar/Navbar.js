import React, { useState } from "react";
import Images from "../../Images";
import './Navbar.css';
import myntraLogo from "../../myntra.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import Modal from "../Product/Modal"
import Cart from "../Product/Cart";
import { NavLink } from "react-router-dom";

const menu = ["Mens", "Womens", "Kids", "Home & Living", "Offer"];

const Navbar = () => {
	const [showWishlist, setShowWishlist] = useState(false)
	const [showCart, setShowCart] = useState(false)

	const wishlistData = useSelector((state) => state.appData.value.wishlist )
	const cartData = useSelector((state) => state.appData.value.cart )
	return (
		<>
			<div className="nav">
				<input type="checkbox" id="nav-check" />
				<div className="nav-header">
					<div className="nav-title">
						<NavLink to="/"><img src={myntraLogo} alt="logo" height="50px" /></NavLink>
					</div>
				</div>
				<div className="nav-btn">
					<label htmlFor="nav-check">
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>
				<div className="nav-links">
					<div className="flexed">
						<div className="inner-content" >
								<p>Home</p>
						</div>
						<div className="inner-content" >
								<p>About</p>
						</div>
						<div className="inner-content" >
								<p>Shop</p>
						</div>
						<div className="inner-content" >
								<p>Careers</p>
						</div>
						<div className="inner-content" >
								<p>Offer</p>
						</div>

					</div>
				</div>
				{/* <div className="nav-search">
					<div className="border">
						<FontAwesomeIcon icon={faSearch} className="font-color" />
						<input className="padding	" type="search" placeholder="Search for Products, brands and more..." /> 			
					</div>
				</div> */}
				<div className="user-profile">
					<div className="flexed">
						{/* Profile */}
						<div className="p-r-10">
	
							<button className="btn btn-primary" style={{padding: "10px"}}>Profile</button>
						</div>

						{/* Whishlist */}
						<div className="p-r-10">
							
							<button className="btn btn-primary" style={{padding: "10px"}} onClick={() => {setShowWishlist(!showWishlist)}}>Wishlist {`${wishlistData?.length > 0 ? wishlistData.length: ''}`}</button>
						</div>

						{/* Cart */}
						<div className="p-r-10">
			
							<button className="btn btn-primary" style={{padding: "10px"}} onClick={() => {setShowCart(!showCart)}}>cart {`${cartData?.length > 0 ? cartData.length: ''}`} </button>
						</div>
					</div>
				</div>
				{
			showWishlist && <Modal />
		}
		{
			showCart && <Cart />
		}
			</div>
		</>
	)
}

export default Navbar;