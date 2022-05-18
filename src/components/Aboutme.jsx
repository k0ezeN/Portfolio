import React from 'react';
import Moi from '../assets/moi.png';

const Aboutme = () => {
  return (
    <div name="aboutme" className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[350px] mx-auto my-4 rounded-full' src={Moi} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ABOUT ME</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Hi,</h1>
          <p>
            My name is Andy GUÉRIN, i'm a 22 y/o student living in Paris. <br/>
            Currently working for IBM as a Junior Blockchain developer, i'm studying computer science at ESILV Paris.<br/><br/>
            In 2016, i started to be interested into cryptocurrency and then by Blockchain. <br/>
            My aim is to work on several Blockchain projects with a team in order to increase my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
