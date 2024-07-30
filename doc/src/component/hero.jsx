import React from 'react'
import Bg from '../assets/bg2.png'
import Cons from '../assets/communication.png'
import Doctoricon from '../assets/doctoricon.png'
import Med from '../assets/medicines.png'
import Booking from '../assets/booking.png'

const hero = () => {
  return (
    <div className='relative '>
        <div>
        <img src={Bg} alt="" className='w-full' />
        <div className='container w-auto px-52 absolute top-1/4 grid  grid-cols-1'>
        <h1 className='text-6xl font-bold'>Better Doctors. </h1>
        <h1 className='text-6xl font-bold'> Better Care. </h1>
        <h1 className='text-6xl font-bold'> Eveywhere.</h1>
        <p className='py-6 w-64'>Lorem ipsum dolor sit amet,  blanditiis modi quisquam doloribus esse illo temporibus accusamus ipsam tenetur. Cumque ea ducimus iste quasi! Totam temporibus voluptatem optio nobis.</p>
        <div>
        <button className='text-white text-xl font-semibold bg-primary rounded-lg px-5 py-3'>Discover More</button>
        </div>
        </div>

        <div className='absolute -bottom-36 mx-auto w-full'>

        <div className=' container mx-auto w-auto bg-white shadow-xl rounded-2xl'>
           <div className=' text-center grid flex justify-center py-6'>
                <h1 className='text-5xl font-bold'>A Personal relationship with medical excellence</h1>
                <p className='py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique ullam do</p>
                <div className='flex justify-centertext-center text-2xl  gap-48'>
                    <div>
                        <img src={Cons} alt="" className='w-16'/>
                        <span className=' '>Consultation</span>
                        
                    </div>
                    <div>
                        <img src={Doctoricon} alt="" className='w-16 '/>
                        <span>Doctor's</span>
                    </div>
                    <div>
                        <img src={Booking} alt="" className='w-16 '/>
                        <span>Reservation</span>
                    </div>
                    <div>
                        <img src={Med} alt="" className='w-16'/>
                        <span>Medicine </span>
                    </div>
                </div>

           </div>

        </div>
            
        </div>

        </div>
     
      
    </div>
  )
}

export default hero
