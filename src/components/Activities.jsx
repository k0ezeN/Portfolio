import React from 'react';
import { FaFootballBall, FaGamepad, FaPlane } from 'react-icons/fa';


import bannerImg from '../assets/banner.jpg'

const Activities = () => {
  return (
  <div name='hobbies' className='w-full mt-15'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bannerImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-9'>
              <h3 className='text-5xl font-bold py-6 text-center'>Hobbies</h3>
              <h2 className='text-3xl pt-8 text-slate-300 text-center'>Here is what i like to do in my life</h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaFootballBall size={70} className='w-16 p-4 bg-[#00df9a] text-white rounded-lg mt-[-4rem] mx-auto' />
                      <h3 className='font-bold text-2xl my-6 text-center'>Sports</h3>
                      <li className='text-gray-600 text-xl'>Tennis</li>
                      <li className='text-gray-600 text-xl'>Football</li>
                      <li className='text-gray-600 text-xl'>Karaté</li>
                      <li className='text-gray-600 text-xl'>Runing</li>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaGamepad size={70} className='w-16 p-4 bg-[#00df9a] text-white rounded-lg mt-[-4rem] mx-auto' />
                      <h3 className='font-bold text-2xl my-6 text-center'>eSport</h3>        
                      <li className='text-gray-600 text-xl'>CS:GO</li>
                      <li className='text-gray-600 text-xl'>Valorant</li>
                      <li className='text-gray-600 text-xl'>Fifa</li>        
                    </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaPlane size={70}  className='w-16 p-4 bg-[#00df9a] text-white rounded-lg mt-[-4rem] mx-auto' />
                      <h3 className='font-bold text-2xl my-6 text-center'>Travels</h3>
                      <li className='text-gray-600 text-xl'>United States</li>
                      <li className='text-gray-600 text-xl'>Neitherlands</li>
                      <li className='text-gray-600 text-xl'>Morocco</li>
                      <li className='text-gray-600 text-xl'>Spain</li> 
                      <li className='text-gray-600 text-xl'>Portugal</li> 
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Activities;
