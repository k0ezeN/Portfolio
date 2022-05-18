import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div name="hero" className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>
                    HEY EVERYONE, MY NAME IS 
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                      Andy GUÉRIN.
                </h1>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
                    I am a full-stack developper using tools like 
                </p>
                <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['Node.js', 'React', 'Angular', 'TailwindCSS', 'Hyperledger']}
                typeSpeed={120}
                backSpeed={140}
                loop
                />        
            </div>
        </div>
    );
};

export default Hero;