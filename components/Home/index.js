import React, { Component, useState, useEffect } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  AreaSeries
} from 'react-vis';
import AnimatedNumber from "animated-number-react";

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
    setCounter1(11031);
    setCounter2(19545.135);
  });

  return (
    <>
      <div className='w-full h-screen mx-auto flex flex-col'>
        <div className='my-5'>
          <XYPlot width={325} height={400} className="mx-auto">
            <XAxis
              tickLabelAngle={-90}
              tickTotal={LineData.length}
              position='middle'
              title=''
              style={{
                text: { fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79' },
                title: {
                  fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79'
                }
              }}
            />
            <YAxis
              position='middle'
              title='Waste Removed (tonnes)'
              style={{
                text: { fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79' },
                title: {
                  fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79'
                }
              }} />
            <AreaSeries
              color={'#2e4a79'}
              curve="curveNatural"
              data={LineData}
            />
          </XYPlot>
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
          <div class="max-w-sm bg-accent-2 rounded-lg border border-accent-2 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="/assets/noearthb.jpeg" alt="" />
            </a>
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">Tweet in Solidarity</h5>
              <a href="https://twitter.com/intent/tweet?url=https://thereisnoearthb.org&text=I+stand+in+solidarity+with+@thereisnoearthb.&hashtags=ThereIsNoEarthB" class="inline-flex items-center mt-3 py-2 px-3 text-lg font-bold text-center text-accent-2 bg-accent-1 rounded-lg hover:bg-accent-2 focus:ring-4 focus:outline-none focus:ring-accent-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">
                <i className='bi bi-twitter mr-2'></i> #ThereIsNoEarthB
              </a>
            </div>
          </div>
        </div>
        <div className='min-h-screen'></div>
      </div>
    </>
  );
};
