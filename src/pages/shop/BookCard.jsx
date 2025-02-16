import React from 'react';
import HeartIcon from '../../icons/HeartIcon';
import HeartFillIcon from '../../icons/HeartFillIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../redux/features/wishlist/wishlistSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';

const BookCard = ({ books, filterBooks }) => {
  const wishlist = useSelector(state => state.wishlist.wishlistbooks);
  const cartbooks = useSelector(state => state.cart.cartbooks);
  const dispatch = useDispatch();

  const handleWishlistToggle = (book) => {
    if (wishlist.some(item => item.isbn === book.isbn)) {
      dispatch(removeFromWishlist(book));
      toast.info("Book removed from wishlist!", {
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
      dispatch(addToWishlist(book));
      toast.success("Book added to wishlist!", {
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

  const isInWishlist = (book) => wishlist.some(item => item.isbn === book.isbn);
  return (
    <>
      {books.map((book, index) => (
        <div
          key={index}
          className={`w-44 rounded-md shadow hover:shadow-lg font-Quicksand ${filterBooks ? `` : `flex-wrap last:hidden sm:last:block sm:even:hidden md:even:block md:last:hidden lg:last:block`
            }`}
        >
          <div className="bg-bg-image flex justify-center items-center p-4">
            <Link to={`/book/${book.isbn}`}>
              <img
                src={book.image}
                alt={book.title || `book-${index}`}
                className="h-44 w-28 rounded object-cover overflow-hidden transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="font-Quicksand px-4 pb-4">
            <p className="text-sm mt-2 h-10 line-clamp-2">{book.title}</p>
            <p className="font-bold text-sm">Price: ${book.price}</p>
            <div className="flex gap-x-2">
              <button
                className="bg-primary text-white font-semibold border-1 cursor-pointer px-1 py-1 rounded-md flex-1 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(book);
                }}
              >
                Add To Cart
              </button>
              <button
                className="border-1 rounded-md px-1 hover:bg-secondary cursor-pointer"
                aria-label="toggle-wishlist"
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishlistToggle(book);
                }}
              >
                {isInWishlist(book) ? <HeartFillIcon /> : <HeartIcon />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCard;
