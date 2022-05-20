import React from 'react'

const Skills = () => {
  return (
    <div name='myskills' className='w-full my-32 text-white'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>My Skills</h2>
                <p className='text-3xl py-6 text-gray-500'>Here is a quick overview of my main skills in computer science</p>
            </div>

            <div className='grid md:grid-cols-3 gap-3 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#00df9a]'>Blockchain</p>
                    <p className='text-gray-400 mt-2'>HyperLedger Fabric, Ethereum, Bitcoin</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#00df9a]'>Crypto</p>
                    <p className='text-gray-400 mt-2'>Market, Trading</p>
                </div>
                <div className='border py-10 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#00df9a]'>React</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-3 px-2 text-center py-3'>
                <div className='border py-10 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#00df9a]'>Angular</p>
                </div>
                <div  className='border py-10 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#00df9a]'>Node.js</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <p className='text-6xl font-bold text-[#00df9a]'>Language</p>
                    <p className='text-gray-400 mt-2'>Solidity, TypeScrit, JavaScript, HTML, CSS</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills