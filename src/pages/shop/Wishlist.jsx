import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearWishlist, removeFromWishlist } from '../../redux/features/wishlist/wishlistSlice';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
  const wishlistbooks = useSelector(state => state.wishlist.wishlistbooks);
  const cartbooks = useSelector(state => state.cart.cartbooks);
  const dispatch = useDispatch();

  const handleWishRemove = (isbn) => {
    dispatch(removeFromWishlist({ isbn }));
  };
  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const handleAddToCart = (book) => {
    if (cartbooks.some(item => item.isbn === book.isbn)) {
      toast.info("Book already added!", {
        autoClose: 2000,
        position: "bottom-right",
        pauseOnHover: false,
        theme: "light",
        toastId: "wishlist-toast",
        style: {
          width: "250px",
          height: "10px",
          fontSize: "13px",
          fontFamily: "Quicksand",
          color: "black",
          margin: "0 20px 10px 0"
        }
      });
    } else {
      dispatch(addToCart(book));
      toast.success("Book added to cart!", {
        autoClose: 2000,
        position: "bottom-right",
        pauseOnHover: false,
        theme: "light",
        toastId: "wishlist-toast",
        style: {
          width: "250px",
          height: "10px",
          fontSize: "13px",
          fontFamily: "Quicksand",
          color: "black",
          margin: "0 20px 10px 0"
        }
      });
    }
  };

  return (
    <>
      <div className="app-max-width px-4 sm:px-8 md:px-20 w-full border-t-2 border-gray-100">
        <h1 className="text-2xl sm:text-4xl text-center sm:text-left mt-6 mb-2 font-Fraunces">
          Wishlist
        </h1>
        <div className="mt-6 mb-3 flex">
          <LeftArrowIcon />
          <Link to="/" className='font-Fraunces'>Continue Shopping</Link>
        </div>
      </div>

      <div className="app-max-width px-4 sm:px-8 md:px-20 mb-14 flex flex-col lg:flex-row">
        <div className="h-full w-full">
          <table className="w-full mb-6">
            <thead>
              <tr className="border-t-1 border-b-1 border-gray-200 font-Fraunces">
                <th className="font-normal hidden md:table-cell text-left sm:text-center py-2 xl:w-72">
                  Book Image
                </th>
                <th className="font-normal hidden md:table-cell text-left sm:text-center py-2 xl:w-72">
                  Book Name
                </th>
                <th className="font-normal md:hidden text-left sm:text-center py-2 xl:w-72">
                  Book Details
                </th>
                <th className={`font-normal py-2`}>
                  Unit Price
                </th>
                <th className="font-normal hidden sm:table-cell py-2 max-w-xs">
                  Add
                </th>
                <th className="font-normal hidden sm:table-cell py-2 text-right w-10 whitespace-nowrap">
                  Remove
                </th>
                <th className="font-normal sm:hidden py-2 text-right w-10">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlistbooks.length === 0 ? (
                <tr className="w-full text-center h-60 border-b-1 border-gray-200 font-Fraunces">
                  <td colSpan={5}>Wishlist is Empty</td>
                </tr>
              ) : (
                wishlistbooks.map((book) => {
                  return (
                    <tr className="border-b-1 border-gray-200" key={book.isbn}>
                      <td className="my-3 flex justify-center flex-col items-start sm:items-center">
                        <a>
                          <img
                            src={book.image}
                            alt={book.title}
                            className="h-32 xl:mr-4"
                          />
                        </a>
                        <span className="text-sm md:hidden font-medium mt-1 font-Quicksand">{book.title}</span>
                      </td>
                      <td className="text-center font-medium hidden md:table-cell font-Quicksand">
                        {book.title}
                      </td>
                      <td className="text-center font-medium font-Quicksand">
                        $ {book.price}
                      </td>
                      <td className="text-center hidden sm:table-cell max-w-xs text-gray-400">
                        <button
                          className="hidden sm:block m-auto border px-4 py-2 rounded-md bg-primary text-white hover:text-gray-200 cursor-pointer font-Fraunces"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(book);
                          }}
                        >Add to Cart</button>
                      </td>
                      <td
                        className="text-right pl-8"
                        style={{ minWidth: "3rem" }}
                      >
                        <button
                          className="sm:hidden mb-4 whitespace-nowrap bg-primary rounded-md text-white hover:text-gray-200 px-2 py-1 cursor-pointer font-Fraunces"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(book);
                          }}
                        >Add</button>
                        <button
                          type="button"
                          className="outline-none focus:outline-none text-3xl cursor-pointer"
                          onClick={() => handleWishRemove(book.isbn)}
                          aria-label='remove-wish-book'
                        >
                          &#10005;
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div>
            <button
              className="border border-primary rounded-md text-lg px-4 py-2 w-full sm:w-48 whitespace-nowrap hover:bg-primary hover:text-white transition cursor-pointer font-Fraunces"
              onClick={handleClearWishlist}
            >
              Clear Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist