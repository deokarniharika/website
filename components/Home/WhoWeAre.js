export default function WhoWeAre() {
  return (
    <>
      <img className="" src="/assets/noearthb.jpeg" alt="" style={{
        minHeight: '14em',
        overflow: 'hidden',
        objectFit: 'cover'
      }} />
      <div className='flex-1 flex flex-col items-center justify-center'>
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
        <div className="p-5 cursor-pointer">
          <a href="https://twitter.com/intent/tweet?url=https://thereisnoearthb.org&text=I+stand+in+solidarity+with+@thereisnoearthb.&hashtags=ThereIsNoEarthB" className="inline-flex items-center mt-1 py-2 px-4 text-2xl font-bold text-center text-accent-2 bg-accent-1 rounded-lg hover:bg-accent-2 focus:ring-4 focus:outline-none focus:ring-accent-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">
            #ThereIsNoEarthB
          </a>
        </div>
      </div>
    </>
  );
};
