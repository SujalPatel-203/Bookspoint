import React from 'react'
import { Link } from 'react-router-dom'
import aboutusimage from '../../assets/aboutusimage.webp'

const AboutUs = () => {
  return (
    <section>
      <div className='bg-secondary h-34 flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-Fraunces'>About Us</h1>
        <span className='font-Quicksand'><Link to='/' className='hover:text-gray-500'>Home</Link> &gt; About Us</span>
      </div>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-Fraunces text-center mt-8 mb-4'>Our Mission</h1>
        <hr className='w-16 mx-auto mb-8' />
        <p className='font-Quicksand text-center mb-4'>Our mission is to bring the passion and love for reading books back. whether it's a regular paper book, or an online edition, we want our readers to know that we appreciate quality and artful storytelling. Join our community and enjoy multiple genres, modern and classic authors, reviews, critics and more!</p>
        <div className='flex justify-center'>
          <img src={aboutusimage} alt="aboutusimage" className='w-auto h-auto' loading='lazy' />
        </div>
        <div className="mt-10 flex justify-center my-4 gap-2 font-medium divide-x text-md max-xs:text-sm font-Fraunces">
          <div className="pr-2">Make the Best Present</div>
          <div className="pr-2">Find Your Favorite Authors</div>
          <div className="">Read Reader's Reviews</div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs