const VideoDetails = ({ title, description }) => {
  return (
    <div className="mt-3 mx-auto w-full">
      <h3 className="font-bold text-lg text-accent-3">{title}</h3>
      <p className="mt-1 text-md text-justify">{description}</p>
    </div>
  );
};

export default VideoDetails;
