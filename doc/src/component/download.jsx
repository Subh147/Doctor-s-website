import React from 'react'
import Phone from '../assets/app_1.png'
import Apple from '../assets/app-store.png'
import Google from '../assets/playstore.png'

const download = () => {
  return (
    <div className='my-40 w-full bg-slate-100'>
      <div className="container mx-auto">
        <div className='flex justify-center'>
            <div>
                <h1 className='text-6xl font-bold py-7'>Download our Mobile Application</h1>
                <p className='text-slate-800 py-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptate amet assumenda cumque, tempore officiis, blanditiis dicta nobis dolorum earum debitis fugit dignissimos laborum et. In assumenda labore suscipit est!</p>
                <div className='flex gap-8'>
                    <div>
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
                <img src={Phone} alt="" className='max-w-5xl' />    

            </div>

        </div>
      </div>
    </div>
  )
  
}

export default download
