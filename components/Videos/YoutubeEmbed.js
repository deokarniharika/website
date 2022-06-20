const YoutubeEmbed = ({ link }) => {
  const embedId = link.split("=")[1];

  return (
    <>
      <div className="video-responsive w-full h-60">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </>
  );
};

export default YoutubeEmbed;
