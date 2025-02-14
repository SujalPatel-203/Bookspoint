import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className={`mt-auto shadow-inner`}>
        <div className="footer-container mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4 md:grid-rows-4 md:gap-x-6 md:gap-y-0 md:px-8 lg:gap-x-8 lg:gap-y-2">
          <div className="col-span-2 md:row-span-3">
            <h2 className="my-2 font-Fraunces text-xl font-semibold">
              Bookspoint Bookstore
            </h2>
            <div className="text-sm font-Quicksand">
              <p className="my-1">
                We are an online bookstore that offers a wide selection of books
                in various genres, including fiction, non-fiction, biographies,
                and more.
              </p>
              <p>
                We provide a convenient and enjoyable shopping experience while
                offering competitive prices and excellent customer service.
              </p>
            </div>
          </div>

          <div className="about-us md:row-span-4">
            <h2 className="my-1 font-Fraunces text-xl font-semibold">Quick Links</h2>
            <div className='flex flex-col gap-y-1.5 font-Quicksand text-sm'>
              <Link to="/contactus">Contact Us</Link>
              <Link to="/aboutus">About Us</Link>
              <a href="">Help</a>
              <a href="">Track Your Order</a>
            </div>
          </div>

          <div className="md:row-span-4 font-Quicksand">
            <h2 className="my-1 font-Fraunces text-xl font-semibold">Kepp in Touch</h2>
            <p className="mb-2 text-sm">
              Email:{" "}
              <a href="mailto:bookspoiin@gmail.com" className="text-link mt-1 block">
                books@point.com
              </a>
            </p>
            <p className="mb-2 text-sm">
              Phone:{" "}
              <a href="tel:+91 9182736450" className="text-link mt-1 block">
                +91 9182736450
              </a>
            </p>
            <p className="mb-2 text-sm">
              Address:{" "}
              <span className="mt-1 block">
                12, 123 Main Street, Gujarat, india
              </span>
            </p>
          </div>
        </div>
        <div className='p-1 border-t-1 border-gray-200 text-center font-Quicksand text-sm'>
          Copyright &copy; 2025 Bookspoint. All Rights Reserved. - Sujal Patel
        </div>
      </footer>
    </>
  )
}

export default Footer