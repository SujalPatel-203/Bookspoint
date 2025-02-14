import React from 'react'

const Account = () => {
  return (
    <>
      <section>
        <div className='flex items-center justify-center'>
          <div className='relative borde mx-auto  w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl'>
            <h3 className="text-3xl text-center my-8 font-medium leading-6 text-gray-900 font-Fraunces">Login</h3>
            <form action="">
              <input type="email" className="border-2 border-gray-300 mb-4 py-2 px-4 outline-none w-full focus:border-gray-500" name="email" placeholder="Email Address *" required autoComplete="email" />
              <input type="password" className="border-2 border-gray-300 py-2 px-4 outline-none w-full focus:border-gray-500 mb-4" name="password" placeholder="Password *" required autoComplete="current-password" />
              <div className="flex justify-between mb-4">
                <div className="flex items-center text-gray-400 focus:outline-none">
                  <input type="checkbox" id="remember" name="remember" className="w-4 h-4 mb-0 mr-2" /><label htmlFor="remember" className="text-sm">Remember me?</label>
                </div>
                <span className="text-gray-400 text-sm hover:text-gray-500 focus:outline-none focus:text-gray500">Forgot your password?</span>
              </div>
              <button type="submit" className="text-xl sm:text-base py-3 sm:py-2 px-6 border border-gray-500 bg-black text-gray-100 hover:text-gray-300 w-full text-center mb-4">Login <span className="ml-1"></span></button>
            </form>
          </div>
        </div>

        <div className='flex items-center justify-center '>
          <div className='relative borde mx-auto  w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl'>
            <h3 className="text-3xl text-center my-8 font-medium leading-6 text-gray-900 font-Fraunces">Register</h3>
            <form action="">
              <input type="text" className="border-2 border-gray-300 mb-4 py-2 px-4 outline-none w-full focus:border-gray-500" name="name" placeholder=" Name *" required />
              <input type="email" className="border-2 border-gray-300 mb-4 py-2 px-4 outline-none w-full focus:border-gray-500" name="email" placeholder="Email Address *" required autoComplete="email" />
              <input type="password" className="border-2 border-gray-300 py-2 px-4 outline-none w-full focus:border-gray-500 mb-4" name="password" placeholder="Password *" required autoComplete="current-password" />
              <div className="flex justify-between mb-4"><p className="text-gray-400 text-xs text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our Privacy Policy</p></div>
              <button type="submit" className="text-xl sm:text-base py-3 sm:py-2 px-6 border border-gray-500 bg-black text-gray-100 hover:text-gray-300 w-full text-center mb-4">Register <span className="ml-1"></span></button>
            </form>
          </div>
        </div>
      </section>
    </>


  )
}

export default Account