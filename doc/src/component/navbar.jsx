import React from 'react'
import logo from '../assets/drlogo.png'

const navbar = () => {
  return (
    <div className='sticky top-0 z-30 right-0 w-full   mx-auto '>
      <div className="container max-w-full x-auto w-full bg-white shadow-xl">
        <div className='px-6 text-xl   flex justify-between '>


            <div className='flex items-center '>
                <img src={logo} alt="" className='w-56' />
                
            </div>


            
            <div className='py-6'>
              <ul className='flex justify-center gap-20'>
                  <li className='text-primary'>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
              </ul>
            </div>

            <div className='py-5 right-full'>
              <button className='text-white bg-primary rounded-lg px-5 py-3'>Join Now</button>
            </div>





        </div>
      </div>
    </div>
  )
}

export default navbar
