import React, { useState } from 'react'
import BookCard from '../shop/BookCard'
import Books from '../../data/books.json'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBooks, setFilterBooks] = useState(Books);
  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filterProducts = Books.filter((book) => book.title.toLowerCase().includes(term) || book.description.toLowerCase().includes(term));

    setFilterBooks(filterProducts);
  }
  const [visibleBooks, setVisibleBooks] = useState(10);
  const loadMoreBooks = () => {
    setVisibleBooks(prevCount => prevCount + 5)
  }
  return (
    <>
      <section className='bg-secondary'>
        <div className='max-w-6xl mx-auto py-8 mb-2'>
          <h2 className='text-center font-Fraunces font-medium mb-4 text-2xl sm:text-3xl md:text-4xl'>Search Page</h2>
          <p className='text-center font-Quicksand font-medium text-sm sm:text-base px-8 md:px-10'>Discover our wide range of books across various categories. Enjoy shopping with exclusive offers and discounts.</p>
        </div>
      </section>
      <section className='max-w-6xl mx-auto px-8'>
        <div className='w-full mb-12 flex flex-col items-center justify-center gap-4 xs:flex-row'>
          <input
            type="text"
            className='w-full max-w-4xl p-2 rounded-md outline-none bg-secondary'
            placeholder='Search books...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='py-2 px-8 bg-primary text-white rounded-md md:w-auto max-xs:w-full cursor-pointer font-medium' onClick={handleSearch}>Search</button>
        </div>
        <div className='max-w-6xl mx-auto flex gap-4 flex-wrap justify-center'>
          <BookCard books={filterBooks.slice(0, visibleBooks)} />
        </div>
        {
          visibleBooks < Books.length && (
            <div className='flex justify-center my-4'>
              <button className='py-2 px-8 bg-primary text-white rounded-md cursor-pointer font-medium' onClick={loadMoreBooks}>Load More</button>
            </div>
          )
        }
      </section>
    </>
  )
}

export default Search