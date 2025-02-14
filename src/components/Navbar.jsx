import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../icons/CartIcon'
import HeartIcon from '../icons/HeartIcon'
import UserIcon from '../icons/UserIcon'
import HomeIcon from '../icons/HomeIcon'
import SearchIcon from '../icons/SearchIcon'
import HamburgerIcon from '../icons/HamburgerIcon'
import CloseIcon from '../icons/CloseIcon'
import ContatIcon from '../icons/ContatIcon'
import AboutIcon from '../icons/AboutIcon'
import CartLeft from '../pages/shop/CartLeft'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const cartbooks = useSelector(state => state.cart.cartbooks)
  const [isOpen, setIsOpen] = useState(false)
  function closeMenu() {
    setIsOpen(!isOpen);
  }
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <header className='bg-light-white sticky top-0 z-20 shadow-md'>
      <nav className='max-w-6xl m-auto px-4 py-4 md:px-8 flex justify-between items-center'>
        {/* mobile menu */}
        <div className='md:hidden'>
          <button onClick={closeMenu} className='cursor-pointer' aria-label='open-menu'>
            <HamburgerIcon />
          </button>
        </div>
        {/* logo */}
        <div className='font-Fraunces font-semibold text-primary text-2xl cursor-pointer'>
          <Link to='/'>Bookspoint</Link>
        </div>
        {/* nav links */}
        <div>
          <ul className='font-Quicksand font-medium flex space-x-4'>
            <li><Link to="/search" className='nav-link-flex' aria-label='go-to-search'><SearchIcon /><span className='hidden xs:block'>Search</span></Link></li>
            <li className='hidden md:block'><Link to="/" className='nav-link-flex'><HomeIcon />Home</Link></li>
            <li className='hidden md:block'><Link to="/account" className='nav-link-flex'><UserIcon />Account</Link></li>
            <li className='hidden md:block'><Link to="/wishlist" className='nav-link-flex'><HeartIcon />Wishlist</Link></li>
            <li><button className='nav-link-flex cursor-pointer' aria-label='go-to-cart' onClick={handleCartToggle}><CartIcon /><span className='hidden xs:block'>Cart</span></button></li>
          </ul>
        </div>
      </nav>
      {(
        <div className={`fixed h-full bg-light-white w-3/4 top-0 left-0 px-4 py-8 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? "opacity-100 transform translate-x-0" : "opacity-0 pointer-events-none transform -translate-x-full"} md:hidden shadow-md`}>
          <button className='flex justify-end w-full cursor-pointer' onClick={closeMenu} aria-label='close-menu'><CloseIcon /></button>
          <div className='text-xl font-medium font-Quicksand text-center mt-8'>
            Bookspoint Book Store
          </div>
          <div className='font-light text-center'>One of the best book stores <br /> in gujarat</div>
          <ul className='list-none font-Quicksand font-normal flex flex-col gap-y-3 mt-8'>
            <li><Link to="/" onClick={closeMenu} className='nav-link-flex'><HomeIcon />Home</Link></li>
            <li><Link to="/account" onClick={closeMenu} className='nav-link-flex'><UserIcon />Account</Link></li>
            <li><Link to="/wishlist" onClick={closeMenu} className='nav-link-flex'><HeartIcon />Wishlist</Link></li>
            <li><Link to="/contactus" onClick={closeMenu} className='nav-link-flex'><ContatIcon />Contact Us</Link></li>
            <li><Link to="/aboutus" onClick={closeMenu} className='nav-link-flex'><AboutIcon />About Us</Link></li>
          </ul>
        </div>
      )}
      {
        isCartOpen && <CartLeft books={cartbooks} isOpen={isCartOpen} onClose={handleCartToggle} />
      }
    </header>

  )
}

export default Navbar
