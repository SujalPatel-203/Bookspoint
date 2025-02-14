import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Books from '../../data/books.json';
import BookCard from '../shop/BookCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    const filterBooks = Books.filter((book) => book.genre === categoryName);
    setFilterBooks(filterBooks);
  }, [categoryName]);

  const getCategoryDescription = (category) => {
    switch (category) {
      case 'Best Seller':
        return "Discover the world's best-selling books that have captivated millions! From thrilling mysteries to inspiring self-help, these must-read titles promise to entertain, educate, and inspire. Find your next favorite book today!";
      case 'Crime & Thriller':
        return "Heart-pounding mysteries, gripping suspense, and shocking twists—dive into the world of Crime & Thriller books, where every page keeps you on edge!";
      case 'Fiction':
        return "Escape into worlds of imagination! Discover thrilling adventures, unforgettable characters, and captivating stories in our collection of fiction books.";
      case 'Sci-Fi & Fantasy':
        return "Explore limitless worlds of imagination! From futuristic adventures to epic fantasy realms, dive into stories of heroism, mystery, and magic. Discover your next great escape today!";
      default:
        return "Browse our wide range of categories to find the perfect books for you.";
    }
  };

  return (
    <>
      <section className='bg-secondary'>
        <div className='max-w-6xl mx-auto py-8 mb-2'>
          <h2 className='text-center font-Fraunces font-medium mb-4 text-2xl sm:text-3xl md:text-4xl'>{categoryName}</h2>
          <p className='text-center font-Quicksand font-medium text-sm sm:text-base px-8 md:px-10'>{getCategoryDescription(categoryName)}</p>
        </div>
      </section>

      <div className='max-w-6xl mx-auto flex gap-4 flex-wrap justify-center mb-4'>
        <BookCard books={filterBooks} filterBooks={filterBooks} />
      </div>
    </>
  )
}

export default CategoryPage