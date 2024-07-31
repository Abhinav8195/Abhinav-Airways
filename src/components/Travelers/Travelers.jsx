import React, { useEffect } from 'react'
import Paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import england from '../../assets/england.jpg'
import newYork from '../../assets/newYork.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

import u1 from '../../assets/u1.jpg'
import u2 from '../../assets/u2.jpg'
import u3 from '../../assets/u3.jpg'
import u4 from '../../assets/u4.jpg'

const travelers=[
  {
    id:1,
    destinationImage:Paris,
    travelerImage:u1,
    travelerName:'John Dev',
    socialLink:'@johndev'
  },
  {
    id:2,
    destinationImage:dubai,
    travelerImage:u2,
    travelerName:'Nicolo Web ',
    socialLink:'@NicoloWeb'
  },
  {
    id:3,
    destinationImage:england,
    travelerImage:u3,
    travelerName:'Wison Lindsey',
    socialLink:'@WisonLindsey'
  },
  {
    id:4,
    destinationImage:newYork,
    travelerImage:u4,
    travelerName:'John Dev',
    socialLink:'@johndev'
  },
]

const Travelers = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>


        <div className="travelersContainer grid">

        {
          travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink}) => {
            return(
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singlrTravveler">
                <img src={destinationImage} alt="" className='destinationImage' />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className='travelerImage' />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>

              </div>
            )
          })
        }

        


      </div>
    </div>

    </div>
  )
}

export default Travelers