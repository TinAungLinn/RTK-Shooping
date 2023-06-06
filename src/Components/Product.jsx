import React from 'react'
import { addToCart } from '../features/services/cartSlice';
import { useDispatch } from 'react-redux';

const Product = (props) => {

    const {id,image,price,title,description} = props

    const dispatch = useDispatch()
    

  return (
    <div> 
      <div className=' flex flex-col p-7 shadow w-72'>
        <img className=' max-w-[170px] h-[200px] mb-3' src={image} alt="" />
        <div className=' flex flex-col gap-3 mb-3'>
            <h2>{title.substring(0,25)}...</h2>
            <p>$ {price}</p>
        </div>
        <button onClick={()=> dispatch(addToCart(props))}  className=' bg-violet-700 hover:bg-violet-600 text-white px-6 py-1'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product
