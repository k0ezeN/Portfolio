import React from 'react';
import emailjs from '@emailjs/browser';
import {
    FaDribbbleSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin
  } from 'react-icons/fa';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_un41x57', 'template_njudgbs', e.target, 'XhIeZbIo3zHwA0zWo')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        e.target.reset()
    }


  return (
    <div name="contact" className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to contact me ? <br/>
            Feel free to ask me any questions.
          </h1>
          <p className="mt-6">Andy Guerin, 2022 All rights reserved</p>
          <div className='flex gap-7 md:w-[75%] my-6'>
          <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andyguerin/"><FaLinkedin size={30} /></a>
            <FaInstagram size={30} />
            <a  target="_blank" rel="noreferrer" href="https://twitter.com/k0ezen77"><FaTwitterSquare size={30} /></a>
          <a  target="_blank" rel="noreferrer" href="https://github.com/k0ezeN"><FaGithubSquare size={30} /></a>
            <FaDribbbleSquare size={30} />
        </div>
        </div>
        <div className='my-4'>
        <form onSubmit={sendEmail}>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email' 
              name='email'
              placeholder='yourEmail@...'
            />
            <button 
             className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='message'
              name='message'
              placeholder='Hey Andy, ...'
            />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
