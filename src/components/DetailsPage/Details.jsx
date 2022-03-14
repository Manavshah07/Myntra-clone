import React from "react";
import Breadcrums from "./Breadcrums";
import "./Details.css";
import Style from "../../helper.css"
import ProductImages from "./ProductImages";
// import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import productsData from "../../ProductsData";
import ProductDetails from "./ProductDetails";

const Details = () => {

  const { pageurl } = useParams();
  // console.log(pageurl);
  return (
    <>
      {
        productsData.map((value, index) => {

          if (value.id == pageurl) {
            var BreadcrumsTitle = "Home > Shirt > " + value.title
            return (
              <>
                <Breadcrums title={BreadcrumsTitle} />
              </>
            )
          }
        })
      }
      <div className="container">
        <div className="details-outer-wrapper">
          {
            productsData.map((value, index) => {
              if (value.id == pageurl) {
                console.log(value);
                return (
                  <>
                    <ProductImages key={index} imgMain={value.image} img2={value.img2} />

                    <ProductDetails productDescription={value.description} productType={value.title} productName={value.brand} productPrice={value.price} size={value.size} value={value} />
                  </>
                )
              }
            })
          }
        </div>
      </div>
    </>
  );
};

export default Details;
