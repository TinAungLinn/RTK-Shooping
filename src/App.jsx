import React from "react";
import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import AddToCart from "./Components/AddToCart";
import Search from "./Components/Search";
import RouteGuard from "./Components/RouteGuard";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
