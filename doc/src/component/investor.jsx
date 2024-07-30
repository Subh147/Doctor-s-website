import React from 'react'
import Earth from '../assets/earth.png'
import velo from '../assets/velo.png'
import uto from '../assets/uto.png'
import kan from '../assets/kan.png'
import Phone from '../assets/app_1.png'
import Apple from '../assets/app-store.png'
import Google from '../assets/playstore.png'
import Computer from '../assets/computer.png'


const investor = () => {
  return (
    <div>
         <div className=' bg-slate-100 text-center grid place-items-center'>
        <h1 className="text-5xl p-10 font-bold">Our investors.</h1>
     <div className='container grid sm:grid-cols-4 content-center gap-3 py-5 '>
       <div className='bg-white p-4 shadow-xl'>
         <img src={Earth} alt="" /> 
       </div > 
       <div className='bg-white p-4 shadow-xl' >
         <img src={velo} alt="" /> 
       </div>
       <div className='bg-white p-4 shadow-xl'>
         <img src={uto} alt="" /> 
       </div>
       <div className='bg-white p-4 shadow-xl'>
         <img src={kan} alt="" /> 
       </div>
       
        
        
        
        </div>
    </div>







    <div className='my-40 w-full '>
      <div className="container mx-auto">
        <div className='grid sm:grid-cols-2 gap-5 place-items-center text-center'>
            <div>
                <h1 className='text-6xl font-bold py-7'>A Transforming, Healing Presence.</h1>
                <p className='text-slate-800 py-20 '>tetur adipisicing elit. Tempora voluptate amet assumenda cumque, tempore officiis, blanditiis dicta nobis dolorum earum debitis fugit dignissimos laborum et. In assumenda labore suscipit est!</p>
                <div className='flex justify-center gap-8 items-center'>
                    <div >
                    <button className='px-5 py-2 text-white text-xl bg-black rounded-xl '>
                        <img src={Google} alt="" className='w-8' /> Google Play
                    </button>
                    </div>
                    
                    <div>
                    <button className='px-7 py-2 text-white text-xl bg-black rounded-xl'>
                        <img src={Apple} alt="" className='w-8' /> App Store
                    </button>
                    </div>
                </div>
            </div>
            <div>
                <img src={Computer} alt="" className='max-w-7xl  px-5' />    

            </div>

        </div>
      </div>
    </div>
    

    <div className="bg-primary text-white flex justify-between p-6">
        <div>
            <h1 className="text-5xl font-bold">Are you doctor? Interested in join us?</h1>
        </div>

        <div>
            <button className='border p-3 text-3xl font-semibold border-gray-50'> Register Here ! </button>
        </div>
    </div>
    </div>
   
    
  )
}

export default investor
