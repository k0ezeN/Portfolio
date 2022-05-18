import React from 'react';
import { FaSchool } from 'react-icons/fa';

const Trainings = () => {
  return (
    <div  name='trainings' className='w-full py-[5rem] px-4 bg-white'>
        <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trainings and diplomas</h2>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-20'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='w-50 mx-auto mt-[-3rem] bg-white'><FaSchool size={70}/></div>
              <h2 className='text-2xl font-bold text-center py-8'>2015 - 2018</h2>
              <p className='text-center text-4xl font-bold'>BAC STI2D</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lycée Saint-Nicolas de Paris</p>
                  <p className='py-2 border-b mx-8'>1 BAC STI2D Mention Bien</p>
                  <p className='py-2 border-b mx-8'>PSC1 (Prévention et secours civique)</p>
              </div>
              <a className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-center' target="_blank" rel="noreferrer" href="https://www.lyceesaintnicolas.com/">Learn more</a>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <div className='w-50 mx-auto mt-[-3rem] bg-white'><FaSchool size={70}/></div>
              <h2 className='text-2xl font-bold text-center py-8'>2018 - 2020</h2>
              <p className='text-center text-4xl font-bold'>CPGE prépa scientifique</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lycée Polyvalent de Cachan</p>
                  <p className='py-2 border-b mx-8'>CPGE TSI</p>
              </div>
              <a className='bg-black w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 text-center' target="_blank" rel="noreferrer" href="https://www.lyceedecachan.fr/">Learn more</a>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='w-50 mx-auto mt-[-3rem] bg-white'><FaSchool size={70}/></div>
              <h2 className='text-2xl font-bold text-center py-8'>2020 - 2023</h2>
              <p className='text-center text-4xl font-bold'>BAC + 5</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>École supérieure d'ingénieurs Léonard-de-Vinci (ESILV)</p>
                  <p className='py-2 border-b mx-8'>Majeur : FINTECH</p>
                  <p className='py-2 border-b mx-8'>Blockchain, CryptoCurrency Market</p>
              </div>
              <a className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-center' target="_blank" rel="noreferrer" href="https://www.esilv.fr/formations/cycle-ingenieur/majeures/fintech/">Learn more</a>
          </div>
      </div>
    </div>
  );
};

export default Trainings;
