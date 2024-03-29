import React, { useState } from 'react'
import useTitle from '../../component/hook/useTitle'
 import './event.css'
 import { LazyLoadImage } from 'react-lazy-load-image-component';

        
import asdev from '../../images/eventsImage/asdev1.png'
import vector from '../../images/eventsImage/Vector.png'

import ImageOne from '../../images/eventsImage/Image1.png'
import ImageTwo from '../../images/eventsImage/Image2.png'
import ImageThree from '../../images/eventsImage/Image3.png'
import ImageFour from '../../images/eventsImage/Image4.png'
import ImageFive from '../../images/eventsImage/Image5.png'
import ImageSix from '../../images/eventsImage/Image6.png'
import ImageSeven from '../../images/eventsImage/Image7.png'
import ImageEight from '../../images/eventsImage/Image8.png'
import ImageNine from '../../images/eventsImage/ImageNine.png'

import ImageTen from '../../images/eventsImage/Image10.png'
import ImageEleven from '../../images/eventsImage/Image11.png'


import SImageOne from '../../images/eventsImage/Showcase/Image1.png'
import SImageTwo from '../../images/eventsImage/Showcase/Image2.png'
import SImageThree from '../../images/eventsImage/Showcase/Image3.png'
import SImageFour from '../../images/eventsImage/Showcase/Image4.png'
import SImageFive from '../../images/eventsImage/Showcase/Image5.png'
import SImageSix from '../../images/eventsImage/Showcase/Image6.png'
import SImageSeven from '../../images/eventsImage/Showcase/Image7.png'
import SImageEight from '../../images/eventsImage/Showcase/Image8.png'

import { BsChevronRight } from "react-icons/bs";
import GoToTop from '../../component/GoToTop'




const Event = () => {

  const [color, setColor] = useState('white');


  useTitle('Event')

  return (
    <div>
     
       <section className='bg-[black] px-4 md:px-8 py-12'>
        <div className="grid grid-flow-col-1 gap-4 lg:grid-cols-2">


          <div className="">
          <LazyLoadImage className='mx-auto' src={asdev} alt="" />
          </div>
          <div className="mx-auto pt-[90px]">

            <h1 className='text-center Some'>
            Some of the <br /> ASDEV81 Club <br /> Events
            </h1>
            <p className='celebrate'>
              We love celebrating our lifestyle and culture <br /> across the world
              but also full of pride and joy in <br /> some of the humanitarian projects
              we have <br /> championed.
            </p>

            <LazyLoadImage src={vector} alt="" />
          </div>
        </div>
      </section>
    
      
      {/* 2 */}
      <section className='px-8  lg:pl-[100px] py-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 1 */}
          <div className="flex items-center">
          <div className="">
            
            <h1 className='See'>See some images of projects <br />
              we afre very proud of.</h1>
            
            <p className='create py-8'>
              Our job is to create a forum for members
              to contribute <br /> towards the general progress and aspirations of Asaba <br />
              people.
            </p>
            <div className="py-8">
                        <button className='view FBT mb-[-90px]   flex justify-between py-6 px-12'>
                                <span className='event'>
                                VIEW ALL ASDEV 81 EVENTS </span>
                               <span className='text-[#367BF5] font-bold mx-4'> <BsChevronRight />  </span>
                       
                        </button>
                      
                        </div>
          </div>
          </div>
          
          {/* 2 */}
          <div className="py-20 lg:py-0">
                {/* 1 */}
            <div className="grid mb-4 grid-cols-1 gap-4 sm:grid-cols-3">

              <div className=" relative">< img className='First  sm:ml-auto ' src={ImageOne} alt="" />
                
              <LazyLoadImage className=' sm:absolute mx-auto bottom-0 right-0' src={ImageTwo} alt="" />

         
              </div>
              <div className="flex  items-end">
              <LazyLoadImage className='mx-auto' src={ImageThree} alt="" />
              </div>
              <div className="">
              <LazyLoadImage className='w-full mx-auto' src={ImageFour} alt="" />
              <LazyLoadImage className='w-full mx-auto' src={ImageFive} alt="" />
              </div>
            </div>
            {/* 2 */}
            <div className="grid  grid-cols-1 gap-4 sm:grid-cols-3 ">

              
            <LazyLoadImage className='w-[100%] mx-auto' src={ImageSix} alt="" />
          
            <div className="">
            <LazyLoadImage className='w-full mx-auto' src={ImageSeven} alt="" />
            <LazyLoadImage className='pt-4 w-full mx-auto' src={ImageEight} alt="" />
            </div>
              <div className="">
              <LazyLoadImage className='' src={ImageNine} alt="" />
                <div className="grid  grid-cols-1  sm:grid-cols-2 pt-4">
                  <i imgmg className='w-full mx-auto' src={ImageTen} alt="" />
                  <LazyLoadImage className='w-full mx-auto' src={ImageEleven} alt="" />

                  
              </div>
            </div>
          </div>
            
          </div>

             </div>
          
      </section>
      {/* 3 */}
      <section className='px-8 bg-[#3E4345] lg:pl-[100px] py-20'>

        <h1 className='text-center text-[30px] sm:text-[60px] world'>
        Showcasing Asaba to the world
        </h1>

        <p className='text-center organize py-6'>
        Promoting and organising activities that will enhance the <br />
          welfare of Asaba people.

        </p>

        <div className="">
          <div className="lg:flex justify-center">
            <div className="">
              <div className="mx-auto sm:flex justify-center mb-4 lg:justify-end">
              <LazyLoadImage className='mx-auto  sm:mx-4' src={SImageOne} alt="" />
              <LazyLoadImage className='mx-auto'  src={SImageTwo} alt="" />
              </div>
              
              <div className=" md:flex">
              <LazyLoadImage className='mx-auto' src={SImageFour} alt="" />
                <div className="">

                <LazyLoadImage className='mb-4 mx-auto' src={SImageFive} alt="" />
                  <div className="sm:flex ">
                  <LazyLoadImage className=' mx-auto lg:mr-4 ' src={SImageSeven} alt="" />
                  <LazyLoadImage className=' mx-auto ' src={SImageEight} alt="" />
                  </div>
                </div>
              </div>
            </div>

            

          </div>
          <div>
            
            <div className="flex items-end FBT h-[100%]  ">
            <div className="flex py-4 justify-between  w-[100%] sm:w-[80%] lg:w-[500px] px-10 boxT ">
              <button className='${color} ' >   <span className='address sm:text-[20px]'>E-mail address</span></button>
                <button className='bg-[#367BF5] py-1 rounded-full px-4 sm:px-14' onClick={() => setColor('blue')} >
                  <span className='RSVP sm:text-[24px]'> RSVP</span> </button>
            </div>
            </div>
          </div>

     
        </div>

        <p className='roads text-center'>
          Two roads diverged in a wood, and I took the one less traveled by and that has made all the difference. – Robert Frost
        </p>
        
          


      </section>

      <GoToTop></GoToTop>
    </div>
  )
}

export default Event