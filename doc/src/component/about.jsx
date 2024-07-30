import React from 'react'
import Poster from '../assets/poster.png'
import Arrow from '../assets/arrow.png'

const about = () => {
  return (
    <div className='my-40 w-full'>
      <div className="container mx-auto">
        <div className='flex justify-center'>
            <div className='py-10'>
                <p className='text-primary text-2xl font-bold'>About Us</p>
                <h1 className='text-5xl font-bold py-24'>A Wealth of Experience To Heal and Help You</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ea amet corrupti ab tempore? Saepe vero at perferendis soluta amet corporis, arjjs sal iic o a okay nut nohing fcuk ouyyt nods do sdj .</p>
                    <div className='py-24'>
                         <button className=' bg-primary rounded-2xl px-5 py-3 gap-2 text-2xl font-semibold text-white p flex'> Discover More <img src={Arrow} alt="" className='py-2 w-5 '/></button>
                    </div>
            </div>

            <div>
                <img src={Poster} alt="" className='max-w-5xl' />    

            </div>

        </div>
      </div>
    </div>
  )
}

export default about
