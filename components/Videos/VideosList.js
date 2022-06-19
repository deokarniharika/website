import VideoLink from "./VideoLink";

const VideoList = (props) => {
  const { videos } = props;

  return (
    <>
      {videos.map((video) => (
        <div className="" key={video.slug}>
          <VideoLink title={video.title} link={video.link} />
        </div>
      ))}
    </>
  );
};

export default VideoList;
