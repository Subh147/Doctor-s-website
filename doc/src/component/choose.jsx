import React from 'react'
import Protect from '../assets/protect.png'
import Support from '../assets/support.png'
import stethe from '../assets/stethescope.png'
import Certified from '../assets/certified.png'

const choose = () => {
  return (
    <div className='my-40 w-full '>
    <div className="container mx-auto">
      <div className=''>
          <div className='text-center'>
            <h1 className='text-primary font-medium text-xl'>Why Choose Us</h1>  
            <h1 className='text-6xl py-10 font-bold'>Bringing Loving Cars to Health care.</h1>
          </div>
          <div className='container flex gap-8 py-20'>
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                    <div className='flex justify-center'>
                         <img src={Certified} alt="" className='w-20 ' />
                       </div>
                        <h1 className='text-2xl font-semibold py-4'>Certified</h1>
                        <p>as jaldj io o oaioi uoukk idj odi ipew yry ryt .</p>

                    </div>

                   </div>
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                       <div className='flex justify-center'>
                         <img src={Protect} alt="" className='w-20 ' />
                       </div>
                       
                       
                       <span>
                       <h1 className='text-2xl font-semibold py-4'>Protective</h1>
                       <p>as jaldj io o oaioi uoukk idj odi ipew yry  .</p>
                       </span>
                        

                    </div>

                   </div>
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                    <div className='flex justify-center'>
                         <img src={stethe} alt="" className='w-20 ' />
                       </div>
                        <h1 className='text-2xl font-semibold py-4'>Proffesional</h1>
                        <p>as jaldj io o oaioi uoukk idj odi ipew yry ryt .</p>

                    </div>

                   </div>
                    <div className="container shadow-md shadow-slate-600 rounded-2xl">
                    <div className='p-10 text-center'>
                    <div className='flex justify-center'>
                         <img src={Support} alt="" className='w-20 ' />
                       </div>
                        <h1 className='text-2xl font-semibold py-4'>Support</h1>
                        <p>as jaldj io o oaioi uoukk idj odi ipew yry ryt .</p>

                    </div>

                   </div>

          </div>
          

      </div>
    </div>
  </div>
  )
}

export default choose
