import React from 'react'
import OrderSummery from './OrderSummery'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice';
import CloseIcon from '../../icons/CloseIcon';

const CartLeft = ({ books, isOpen, onClose }) => {

  const dispatch = useDispatch();
  const handlequantity = (type, isbn) => {
    const payload = { type, isbn }
    dispatch(updateQuantity(payload))
  }

  const removeItem = (e, isbn) => {
    e.preventDefault();
    dispatch(removeFromCart({ isbn }))
  }
  return (
    <div className={`fixed z-[100] inset-0 bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transition: 'opacity 300ms' }}
    >
      <div className={`fixed right-0 top-0 w-full sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-1/3 h-full bg-white transition-transform ${isOpen ? "translate-x-0" : "translate-x-full "}`}
      style={{ transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        <div className='p-4 h-20 bg-secondary'>
          <div className='flex justify-between items-center mt-2'>
            <h4 className='text-xl font-medium font-Fraunces'>Cart</h4>
            <button
              className='text-gray-600 hover:text-gray-900 cursor-pointer'
              onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className='cart__details overflow-y-auto h-[calc(100%-15rem)]'>
          {
            books.length === 0 ?
              (<div className='flex items-center justify-center h-full font-semibold text-xl font-Fraunces'>Your Cart is Empty</div>) :
              (
                books.map((book, index) => (
                  <div key={index} className='flex items-center justify-between p-4 font-Quicksand'>

                    <div className='flex items-center relative'>
                      {/* <span className='absolute top-0 mr-4 px-1 bg-primary text-white rounded-full'>0{book.quantity}</span> */}
                      <img src={book.image} alt="" className='w-22 h-36 object-cover mr-4' />
                    </div>

                    <div className='flex-grow'>
                      <h2 className='mb-4 line-clamp-2'>{book.title}</h2>
                      <div className='flex flex-row'>
                        <button className='size-7 flex items-center justify-center px-1.5 border border-gray-600 hover:text-white hover:bg-black'
                          onClick={() => handlequantity('decrement', book.isbn)}
                        >-</button>
                        <span className='border-l-0 border-r-0 border border-gray-600 px-1.5 size-7 flex items-center justify-center'>{book.quantity}</span>
                        <button className='size-7 flex items-center justify-center px-1.5 border border-gray-600 hover:text-white hover:bg-black' onClick={() => handlequantity('increment', book.isbn)}
                        >+</button>
                      </div>
                    </div>

                    <div className='flex flex-col items-end'>
                      <button className='mb-3 cursor-pointer' onClick={(e) => removeItem(e, book.isbn)}>
                        <CloseIcon />
                      </button>
                      <p>${Number(book.price).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              )
          }
        </div>

        <div className='fixed w-full bottom-0 bg-white'>
          {books.length > 0 && (<OrderSummery />)}
        </div>

      </div>
    </div>
  )
}

export default CartLeft