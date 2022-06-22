const HowToHeader = () => {
  return (
    <>
      <div className='m-5 mt-6 mb-7'>
        <h1 className="text-4xl font-bold text-accent-3 w-40">how to? guides</h1>
        <img
          src='/assets/cleanup.jpg'
          className='absolute right-5 top-0 lg:right-[31%]'
          style={{
            objectFit: 'cover',
            borderRadius: '0px 0px 235px 235px',
            height: '175px',
            width: '160px',
          }}
        ></img>
      </div>
    </>
  );
};

export default HowToHeader;
