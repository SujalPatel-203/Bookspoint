import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartlist } from '../../redux/features/cart/cartSlice';

function OrderSummery() {
  const { grandTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClearCartlist = () => {
      dispatch(clearCartlist());
    };

  return (
    <>
      <div>
        <div className='flex flex-row justify-between px-4 font-medium'>
          <p className='font-Fraunces'>Subtotal</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>
        <div className='m-4'>
          <button className='w-full size-12 border border-black font-medium hover:text-gray-600 font-Fraunces' onClick={handleClearCartlist}>Clear Cart</button>
        </div>
        <div className='m-4'>
          <button className='w-full size-12 border border-black font-medium bg-black text-white hover:text-gray-300 font-Fraunces'>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default OrderSummery