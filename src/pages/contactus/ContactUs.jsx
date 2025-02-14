import React from 'react'
import contactusimage from '../../assets/ContactUsImage.webp'

const ContactUs = () => {
  return (
    <>
      <section className='max-w-6xl mx-auto py-8'>
        <div className='flex gap-x-6 justify-between max-lg:flex-col max-lg:p-6'>
          <div className='p-4 flex flex-col gap-y-3 flex-1'>
            <div className='flex justify-center'>
              <img src={contactusimage} alt="contactusimage" className='w-auto h-auto' loading='lazy' />
            </div>
            <div>
              <h1 className='mb-2 font-Fraunces text-2xl'>Get In Touch</h1>
              <h3 className='mb-2 font-semibold font-Quicksand'>We're here to help!</h3>
              <p className='text-justify font-Quicksand'>If you have any questions, feedback, or just want to say hello, feel free to reach out to us. Our team is here to assist you and ensure you have the best experience possible. You can contact us via email, phone, or by filling out the form below. We look forward to connecting with you!</p>
            </div>
          </div>

          <div className='p-4 flex flex-col flex-1'>
            <label htmlFor="name" className='font-semibold mb-3 font-Fraunces'>Name</label>
            <input type="text" id='name' placeholder='Enter Your Name' className='mb-8 outline-none border-b-1' />
            <label htmlFor="emial" className='font-semibold mb-3 font-Fraunces'>Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Your Valid Email' className='mb-8 outline-none border-b-1' />
            <label htmlFor="message" className='font-semibold mb-3 font-Fraunces'>Message</label>
            <textarea name="mesage" id="message" placeholder='Enter Your Message' className='mb-1 outline-none border-b-1 resize-none h-20'></textarea>
            <button className='border border-primary p-2 mt-4 font-light text-lg 
            hover:bg-primary rounded-md hover:text-white transition font-Fraunces'>Submit</button>
          </div>
        </div>

      </section>
    </>
  )
}

export default ContactUs