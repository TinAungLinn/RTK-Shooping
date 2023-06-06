import React from "react";
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md"
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../features/services/cartSlice";

const Cart = (props) => {
  const { id, title, image, price, quantity } = props;

  const dispatch = useDispatch()



  const oneItemPrice = price * quantity

  return (
    <div className=" w-[50%] p-10 gap-20 flex justify-between my-0 mx-auto">
      <div className=" flex gap-7 items-center justify-around">
        <div className=" w-[120px]">
          <img src={image} className=" max-w-[100px] h-[100px]" alt="" />
        </div>
        <div>
          <h3 className="">{title.substring(0, 25)} . . .</h3>
          <p>$ {oneItemPrice.toFixed(2)}</p>
          <p onClick={()=> dispatch(removeFromCart(props))}  className="cursor-pointer text-red-500">Remove</p>
        </div>
      </div>
      <div className=" flex flex-col gap-5 items-center">
        <p onClick={()=> dispatch(increaseQuantity(props))} className=" cursor-pointer select-none"><MdOutlineKeyboardArrowUp/></p>
        <p>{quantity}</p>
        <p onClick={()=> quantity > 1 && dispatch(decreaseQuantity(props))} className=" cursor-pointer select-none"><MdOutlineKeyboardArrowDown/></p>
      </div>
    </div>
  );
};

export default Cart;
