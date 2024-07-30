import React from 'react'
import Protect from '../assets/protect.png'
import Support from '../assets/support.png'
import stethe from '../assets/stethescope.png'
import Certified from '../assets/certified.png'
import mus from  '../assets/muskan.png'
import john from  '../assets/john.png'
import mike from  '../assets/mike.png'


const Testimonial = () => {
  return (
    <div>
     <div className='my-40 w-full '>
    <div className="container mx-auto">
      <div className=''>
          <div className='text-center'>
            <h1 className='text-primary font-medium text-xl'>Testimonial</h1>  
            <h1 className='text-6xl py-10 font-bold'>What They Say.</h1>
          </div>
          <div className='container flex gap-8 py-20'>
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                    <div className='flex justify-center'>
                         <img src={john} alt="" className='w-20 ' />
                       </div>
                        <h1 className='text-2xl font-semibold py-4'>John bhattacharya</h1>
                        <h1 className=' font-semibold text-primary '>Buisness Manager</h1>
                        <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quae, saepe excepturi corrupti animi eius laboriosam dolorem ratione labore omnis!</p>

                    </div>

                   </div>
                  
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                    <div className='flex justify-center'>
                         <img src={mus} alt="" className='w-20 ' />
                       </div>
                        <h1 className='text-2xl font-semibold py-4'>Muskan Singh</h1>
                        <h1 className=' font-semibold text-primary '>Buisness Manager</h1>
                        <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fugit aspernatur praesentium vitae eligendi enim asperiores eius ipsam ipsum accusamus.</p>

                    </div>

                   </div>
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                    <div className='flex justify-center'>
                         <img src={mike} alt="" className='w-20 ' />
                       </div>
                        <h1 className='text-2xl font-semibold py-4'>Mike Tyson</h1>
                        <h1 className=' font-semibold text-primary '>Buisness Manager</h1>
                        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt unde nesciunt beatae ducimus eum cupiditate porro eligendi quas vel!</p>

                    </div>

                   </div>

          </div>
          

      </div>
    </div>
  </div>
    </div>
  )
}

export default Testimonial
