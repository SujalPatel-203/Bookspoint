import React from 'react'
import heroImage from '../../assets/HeroSectionImage2.webp'
import DownIcon from '../../icons/DownIcon'
const HeroSection = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-Fraunces text-3xl md:text-5xl font-bold mb-4 max-xs:text-xl">Best Place to Find Your Favourite Books.</h1>
          <p className="text-md max-w-2xl font-semibold max-xs:text-sm">Explore a world of stories at our online bookstore! From timeless classics to modern bestsellers, there's a perfect book waiting for you. Shop now and find your next favorite read ! Start your next adventure today!</p>
          <a href="#books" className="mt-8 px-4 py-2 border-1 text-white text-lg font-semibold rounded-lg hover:bg-secondary transition max-xs:text-sm flex gap-x-1">Explore <span className='pt-1 animate-bounce'><DownIcon /></span></a>
          <div className="mt-10 flex gap-2 font-semibold divide-x text-md max-xs:text-sm">
            <div className="pr-2">Fast Delivery</div>
            <div className="pr-2">Exclusive Deals</div>
            <div className="">Curated Collections</div>
          </div>
        </div>
      </section >
    </>
  )
}

export default HeroSection