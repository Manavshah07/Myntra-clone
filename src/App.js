import "./App.css";
import { Route, Routes } from "react-router-dom";
import Breadcrums from "./components/DetailsPage/Breadcrumbs";
import FilterActions from "./components/FilterActions/FilterActions";
import HomePage from "./components/HomePage";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";
import Sort from "./components/Sort/Sort";
import FilterProvider from "./ProductsContext";
import Details  from "./components/DetailsPage/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:pageurl" element={<Details />} />
      </Routes>
    </>
    // <h1>Hi</h1>
  );
}

export default App;
