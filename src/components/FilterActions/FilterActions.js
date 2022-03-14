import React, { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import "./FilterActions.css";

export default function FilterActions() {
  const { clearFilters, updateFilters } = useContext(ProductsContext);

  return (
    
        <>
        
              <div className="filter-left-content">
                  <div className="position-fixed left-content-border">
                      <div className="filter-wrapper">
                      <button
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#2874f0",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: "30px",
                        padding: "8px",
                        display: "inline-block",
                        margin: "20px 60px"
                      }}
                      onClick={() => {
                        document
                          .querySelectorAll("input[type=radio]")
                          .forEach((item) => (item.checked = false));
                        clearFilters();
                      }}
                    >
                    CLEAR FILTERS
                    </button>
                        <div className="container">
                          <div className="label-space">
                          <input type="radio" name="gender" id="men" onChange={updateFilters}/>
                          <label>Men</label>
                          <br />
                          <input type="radio" name="gender" id="women" onChange={updateFilters}/>
                          <label>Women</label>
                          <br />
                          <input type="radio" name="gender" id="others" onChange={updateFilters}/>
                          <label>Others</label>
                          <br />
                          </div>
                        </div>
                      </div>

                      <div className="filter-wrapper">
                        <div className="container">
                          <h3>Categories</h3>
                        <div className="label-space">
                          <input type="radio" name="category" id="shirt" onChange={updateFilters}/>
                            <label>Shirts</label>
                            <br />
                            <input type="radio" name="category" id="sleep shirt" onChange={updateFilters}/>
                            <label>Sleep Shirts</label>
                            <br />
                            <input type="radio" name="category" id="dog shirt" onChange={updateFilters}/>
                            <label>Dog shirts</label>
                            </div>
                        </div>
                    </div>

                    <div className="filter-wrapper">
                        <div className="container">
                          <h3>Brands</h3>
                          <div className="label-space">
                              <input type="radio" id="zara" name="brand" onChange={updateFilters}/>
                                <label>Zara</label>
                                <br />
                                <input type="radio" id="parx" name="brand" onChange={updateFilters} />
                                <label>Parx</label>
                                <br />
                                <input type="radio" id="roadster" name="brand" onChange={updateFilters} />
                                <label>Roadster</label>
                                <br />
                                <input type="radio" id="harvard" name="brand" onChange={updateFilters} />
                                <label>Harvard</label>
                                <br />
                                <input type="radio" id="wrogn" name="brand" onChange={updateFilters} />
                                <label>Wrogn</label>
                                <br />
                          </div>
                      </div>
                    </div>
    
      
                </div>
              </div>
      </>
  );
}

/**
 * Sort price -> prod.sort((a,b)=>a.price>b.price)
 *
 * Size -> prod.filter(x=>x.size==='size')
 *
 * Brand -> same as size
 *
 * type -> same as size
 *
 * For multiple features -> store all the filters in separate array
 *
 * upon clear all features -> assign state to filters array
 */
