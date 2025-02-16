import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Books from '../../../data/books.json'
import { addToCart } from '../../../redux/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleBook = () => {
  const { isbn } = useParams();
  const book = Books.find(b => b.isbn === isbn);
  if (!book) {
    return <p>Book not found!</p>;
  }
  const cartbooks = useSelector(state => state.cart.cartbooks);
  const dispatch = useDispatch();
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
      <section>
        <div className='bg-secondary h-52 flex justify-center items-center flex-col'>
          <h2 className='font-Fraunces text-3xl mb-4'>Single Book</h2>
          <div className='font-Quicksand'>
            <span>
              <Link to='/'>Home </Link>
            </span>
            <span> &gt; </span>
            <span className='font-medium'> {book.title}</span>
          </div>
        </div>

        <div className='max-w-6xl mx-auto my-8 px-4 md:px-8'>
          <div className='flex gap-8 flex-col md:flex-row'>
            <div className='max-md:self-center'>
              <img src={book.image} alt={book.title} className='h-auto w-auto rounded-md' loading='lazy' />
            </div>
            <div className='self-center'>
              <h3 className='text-2xl font-Fraunces font-semibold mb-4'>{book.title}</h3>
              <p className='text-xl font-Quicksand mb-4'>${book.price}</p>
              <p className='font-Quicksand mb-4'>{book.description}</p>
              <div className='font-Quicksand'>
                <p><strong className='font-Fraunces'>Author :</strong> {book.author}</p>
                <p><strong className='font-Fraunces'>Genre :</strong> {book.genre}</p>
              </div>
              <button
                className="bg-primary text-white font-semibold border-1 cursor-pointer rounded-md flex-1 text-md mt-4 px-4 py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(book);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBook;
