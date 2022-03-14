import React, {useContext} from "react";
import "../../helper.css";
import "./Sort.css";
import { ProductsContext } from "../../ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

const Sort = () => {

    const { updateFilters } = useContext(ProductsContext);

  return (
    <div className="container">
      <h4>Shirts For Men </h4>
      <div className="flexed">
        <div className="">
          <strong>FILTERS</strong>
        </div>
        <div className="container">
          <div class="dropdown">
            <div className="flexed">
              <div class="dropbtn">Sort by : <strong>Recommended</strong> </div>
			  <div className="caret-icon">
              <FontAwesomeIcon icon={faAngleDown} className="font-color" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
