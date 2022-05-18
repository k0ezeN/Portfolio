import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =() => setNav(!nav)

  return (
    <div className='flex sticky top-0 w-full justify-between items-center h-24 mx-auto px-4 text-white z-[10] bg-[#000300]'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] ml-24'>PORTFOLIO.</h1>
      <ul className='hidden md:flex mr-24'>
          <li className='p-4'><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li className='p-4'><Link to="aboutme" smooth={true} offset={-50} duration={500}>AboutMe</Link></li>
          <li className='p-4'><Link to="myskills" smooth={true} offset={-100} duration={500}>Skills</Link></li>
          <li className='p-4'><Link to="trainings" smooth={true} offset={-50} duration={500}>Trainings</Link></li>
          <li className='p-4'><Link to="hobbies" smooth={true} offset={-50} duration={500}>Hobbies</Link></li>
          <li className='p-4'><Link to="contact" smooth={true} offset={-200} duration={500}>Contact</Link></li>
      </ul>
      <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlineMenu className='w-5' /> : <AiOutlineClose className='w-5' />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>PORTFOLIO.</h1>
          <li className='p-4 border-b border-gray-600'><Link onClick={handleClose} to="hero" smooth={true} duration={500}>Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link onClick={handleClose} to="aboutme" smooth={true} offset={-50} duration={500}>AboutMe</Link></li>
          <li className='p-4 border-b border-gray-600'><Link onClick={handleClose} to="myskills" smooth={true} offset={-100} duration={500}>Skills</Link></li>
          <li className='p-4 border-b border-gray-600'><Link onClick={handleClose} to="trainings" smooth={true} offset={-50} duration={500}>Trainings</Link></li>
          <li className='p-4 border-b border-gray-600'><Link onClick={handleClose} to="hobbies" smooth={true} offset={-50} duration={500}>Hobbies</Link></li>
          <li className='p-4 border-b border-gray-600'><Link onClick={handleClose} to="contact" smooth={true} offset={-200} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
