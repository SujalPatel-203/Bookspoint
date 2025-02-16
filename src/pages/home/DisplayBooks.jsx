import React, { useEffect, useState } from 'react'
import BookCard from '../shop/BookCard'
import Books from '../../data/books.json'
import { Link } from 'react-router-dom';

const categories = ['Best Seller', 'Crime & Thriller', 'Fiction', 'Sci-Fi & Fantasy'];

const DisplayBooks = () => {
  const [booksByCategory, setBooksByCategory] = useState({});

  useEffect(() => {
    const categorizedBooks = categories.reduce((acc, category) => {
      acc[category] = Books.filter(book => book.genre === category).slice(0, 5);
      return acc;
    }, {});
    setBooksByCategory(categorizedBooks);
  }, []);

  return (
    <div id='books' className='max-w-6xl mx-auto mt-14'>
      {categories.map(category => (
        <div key={category} className='mb-8'>
          <div className='flex items-center justify-between px-12 mb-3 font-Fraunces'>
            <h1 className='text-xl'>{category}</h1>
            <Link to={`/categories/${category}`}>See All</Link>
          </div>
          <div className="grid grid-cols-1 gap-y-4 justify-items-center xs:grid-rows-2 xs:grid-cols-2 sm:grid-cols-3 sm:grid-rows-1 md:grid-cols-4 lg:grid-cols-5">
            <BookCard books={booksByCategory[category] || []} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayBooks;