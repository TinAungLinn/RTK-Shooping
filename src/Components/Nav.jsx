import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { BsBagFill } from "react-icons/bs";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const {cartItems} = useSelector(state => state.cart)


  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
  };

  const searchProduct = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/search",{state : searchProduct})
    
  }

  return (
    <div className=" relative bg-gray-50 flex flex-wrap gap-3 justify-around items-center p-7 shadow-lg">
      <Link to={"/"}>
        <h2 className=" text-3xl cursor-pointer font-semibold text-purple-900 hover:text-purple-500">
          Comfity
        </h2>
      </Link>
      <div className=" flex gap-5">
        <form onSubmit={searchHandler}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
            placeholder="Find Products"
            radius="md"
          />
        </form>
        <Link to={"/addToCart"}>
          <div className=" relative">
            <Badge className=" absolute  left-5" color="violet">
              {cartItems.length}
            </Badge>
            <BsBagFill className=" hover:text-violet-600 text-3xl text-violet-800" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
