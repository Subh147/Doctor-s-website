import React from 'react' 
import Navbar from './component/navbar'
import Hero from './component/hero'
import About from './component/about'
import ServiceCard1 from './component/serviceCard1'
import Download from './component/download'
import Chooseus from './component/choose'
import Catagory from './component/catagory'
import Testimonial from './component/Testimonial'
import Investor from './component/investor'

const App = () => {
  return (
    <div>
       <div >
            <Navbar />
            <Hero />
           
       </div>
       <About/>
       <ServiceCard1 />
       <Download />
       <Chooseus />
       <Catagory />
       <Testimonial />
       <Investor />

    </div>
   
  )
}

export default App
