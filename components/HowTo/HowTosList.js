import HowToLink from './HowToLink';

const HowTosList = ({ howTos }) => {
  return (
    <div className='ml-5 mt-5 mb-5'>
      {howTos.map(howTo => (
        <HowToLink howTo={howTo} />
      ))}
    </div>
  );
};

export default HowTosList;
