import React from 'react'
import Register from '../assets/register.png'
import AppIcon from '../assets/app.png'
import Docicon from '../assets/doctor.png'

const serviceCard1 = () => {
  return (
    <div className='w-full'>
        <div className='container w-full mx-auto'>
            <div className='flex justify-between gap-28'>
                <h1 className='text-6xl font-bold px-12 py-16'>Easy way to join our membership.</h1>
                <p className='py-16 w-fit'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci unde, quaerat inventore similique nostrum ullam quidem quae odit sapiente recusandae porro, eius eos dicta commodi quo tempore odio libero molestias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum perferendis, cupiditate quas a reprehenderit in consequuntur doloribus tempora. Accusamus soluta molestias vel veniam ipsa libero officia atque similique? Ab, nobis!</p>
            </div>


            <div className='container gap-20 flex py-5 '>

                <div className='container  shadow-2xl shadow-primary rounded-2xl'>
                    <div className='p-10 text-center'>
                        <button><img src={Register} alt=""className='w-32 ' /></button>
                        <h1 className='text-2xl font-semibold p-5'>Register</h1>
                        <p className='text-xl py-5'>You can Register Here and keep benefits along this</p>
                    </div>
                </div>


                <div className="container shadow-2xl shadow-primary rounded-2xl">
                <div className='p-10 text-center'>
                        <button><img src={AppIcon} alt="" className='w-32'/></button>
                        <h1 className='text-2xl p-5 font-semibold'>Download App </h1>
                        <p className='text-xl p-5'>You can download our App and keep benefits along this</p>
                    </div>

                </div>


                <div className="container shadow-2xl shadow-primary rounded-2xl">
                <div className='p-10 text-center'>
                        <button><img src={Docicon} alt="" className='w-32'/></button>
                        <h1 className='text-2xl p-5 font-semibold'>Doctor's</h1>
                        <p className='text-xl p-5'>Choose your prafarable Doctor's and keep benefits along this</p>
                    </div>

                </div>


            </div>
        </div>
     
    </div>
  )
}

export default serviceCard1
