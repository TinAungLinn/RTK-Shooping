import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddToCart = () => {

  const {cartItems,totalAmount} = useSelector(state => state.cart)

  // const test = useSelector(state => console.log(state))

  // console.log(test)

  // console.log(cartItems)
  // console.log(totalAmount)


  if (cartItems.length === 0) {
    return (
      <div className=" flex h-screen items-center justify-center">
        <div className=" flex flex-col gap-3 justify-center items-center">
          <h1 className=" text-3xl tracking-wider">Your cart is empty</h1>
          <Link to={"/"}>
            <button className=" hover:bg-violet-600 rounded mx-auto px-4 py-1 bg-violet-800 text-white">
              Fill it
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className=" mb-16">
      <div className="">
        {cartItems?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr className=" w-[60%] mx-auto" />
      <div className=" mx-auto mt-3 flex justify-around w-[60%]">
        <h3 className="">Total</h3>
        <p>$ {totalAmount?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default AddToCart;
