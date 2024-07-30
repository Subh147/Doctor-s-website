import React from 'react'
import Bg3 from '../assets/bg4.png'
import Cons from '../assets/communication.png'
import Doctoricon from '../assets/doctoricon.png'
import Med from '../assets/medicines.png'
import Booking from '../assets/booking.png'
import Cardiology from '../assets/cardiology.png'
import Neuro from '../assets/brain.png'
import Dental from '../assets/tooth.png'
import MedShop from '../assets/pharmacy.png'

const catagory = () => {
  return (
    <div className='relative '>
        <div className=' text-center justify-center'>
        <img src={Bg3} alt="" className='w-full' />
        <div className='container w-auto px-52 absolute top-1   grid  grid-cols-1'>
        <h1 className='text-6xl font-bold textwhi'>Total Care.  </h1>
        <h1 className='text-6xl font-bold'> Inside and Out. </h1>
        <h1 className='text-6xl font-bold'> Eveywhere.</h1>
        
        <div className='py-24'>
        <button className='text-white text-xl font-semibold bg-primary rounded-lg px-5 py-3'>Discover More</button>
        </div>
        </div>

        <div className='absolute -bottom-36 mx-auto w-full'>

        <div className=' container mx-auto w-auto bg-white shadow-xl rounded-2xl'>
           <div className=' text-center  flex justify-center py-6'>
                
                <div>
                <h1 className='text-5xl font-bold'>Better Doctors. Better Care.</h1>
                <p className='py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique ullam do</p>
                </div>
                    
                <div className='container flex justify-between text-2xl   gap-48'>
                    <div>
                        <img src={Cardiology} alt="" className='w-16'/>
                        <span className=' '>Cardiology</span>
                        
                    </div>
                    <div>
                        <img src={Neuro} alt="" className='w-16 '/>
                        <span>Neurology</span>
                    </div>
                    <div>
                        <img src={Dental} alt="" className='w-16 '/>
                        <span>Dental</span>
                    </div>
                    <div>
                        <img src={MedShop} alt="" className='w-16'/>
                        <span>Medicine shop </span>
                    </div>
                    
                </div>

           </div>

        </div>
            
        </div>

        </div>
     
      
    </div>
  )
}

export default catagory
