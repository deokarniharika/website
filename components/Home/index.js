import React, { useState, useEffect } from 'react';
import AnimatedNumber from "animated-number-react";
import WasteCleanedChart from './WasteCleanedChart';
import SolidarityCard from './SolidarityCard';

const LineData = [
  { x: 319, y: 44 },
  { x: 318, y: 95 },
  { x: 317, y: 54.2 },
  { x: 316, y: 218 },
  { x: 315, y: 50 },
  { x: 314, y: 63.5 },
  { x: 313, y: 33.5 },
  { x: 312, y: 13 },
  { x: 311, y: 70 },
  { x: 310, y: 16.5 },
  { x: 309, y: 12 },
  { x: 308, y: 7.9 },
  { x: 307, y: 9 }
];

export default function Home() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter1(11031);
      setCounter2(19545.135);
    }, 2000);
  });

  return (
    <>
      <div className='w-full h-screen mx-auto flex flex-col'>
        <div className='my-5 pt-1'>
          <WasteCleanedChart data={LineData} />
        </div>
        <div className='my-5 flex flex-col items-center text-accent-2'>
          <div className='text-7xl mb-0'>
            <AnimatedNumber
              value={counter1}
              formatValue={(value) => value.toFixed(0)}
            />
          </div>
          <div className='text-3xl' style={{ marginTop: '-.5em' }}>
            volunteers
          </div>
        </div>
        <div className='mb-5 mx-6 text-center flex flex-col items-center text-accent-2'>
          <div className='text-7xl mb-0 text-center'>
            <AnimatedNumber
              value={counter2}
              formatValue={(value) => value.toFixed(0)}
            />
          </div>
          <div className='text-2xl ' style={{ marginTop: '-.5em' }}>
            kgs of non-biodegradable waste removed
          </div>
        </div>
        <div className='my-6 py-3 mx-6 text-center flex flex-col items-center text-accent-1'>
          <SolidarityCard />
        </div>
        <div className='mt-8 bg-accent-2 min-h-screen'>
          <div className=''>
            <img className="" src="/assets/noearthb.jpeg" alt="" style={{
              minHeight: '15em',
              overflow: 'hidden',
              objectFit: 'cover'
            }} />
            <div className='relative left-0 top-20 pt-7 flex flex-col items-center justify-center'>
              <div className='text-center text-3xl text-accent-1 capitalize font-bold'>
                Who we are?
              </div>
              <div className='text-justify text-md text-accent-1 w-3/4 mt-5'>
                Hi there! We're a passionate bunch of humans on a mission to save the
                Earth. It is an earnest effort of active citizens to bring about change
                at the ground level.
              </div>
              <div className='text-justify text-md text-accent-1 w-3/4 mt-5'>
                We've cleaned up more than 9 tons of
                non-biodegradable waste and we are on a mission to save the Earth who
                believe in Inclusive, Organic, and Decentralized Climate Action.
              </div>
              <div class="p-5">
                <a href="https://twitter.com/intent/tweet?url=https://thereisnoearthb.org&text=I+stand+in+solidarity+with+@thereisnoearthb.&hashtags=ThereIsNoEarthB" class="inline-flex items-center mt-1 py-2 px-3 text-2xl font-bold text-center text-accent-2 bg-accent-1 rounded-lg hover:bg-accent-2 focus:ring-4 focus:outline-none focus:ring-accent-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">
                  #ThereIsNoEarthB
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-4 bg-accent-1 my-8' style={{
          minHeight: '7em',
        }}>
          <div className='text-center text-3xl text-accent-2 capitalize'>
            <a href='https://www.instagram.com/thereisnoearthb/' target={'_blank'} rel={'noopener noreferrer'}>
              <i className='bi bi-instagram px-5'></i>
            </a>
            <a href='https://twitter.com/ThereIsNoEarthB' target={'_blank'} rel={'noopener noreferrer'}>
              <i className='bi bi-twitter px-5'></i>
            </a>
            <a href='https://www.facebook.com/thereisnoearthb/' target={'_blank'} rel={'noopener noreferrer'}>
              <i className='bi bi-facebook px-5'></i>
            </a>
            <a href='https://www.linkedin.com/in/thereisnoearthb' target={'_blank'} rel={'noopener noreferrer'}>
              <i className='bi bi-linkedin px-5'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
