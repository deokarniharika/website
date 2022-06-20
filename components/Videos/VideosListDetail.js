import VideoDetails from "./VideoDetails";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoListDetail = (props) => {
  const { videos } = props;

  return (
    <>
      {videos.map((video) => (
        <div className="flex flex-col items-center justify-center mb-5" key={video.slug}>
          <YoutubeEmbed link={video.link} />
          <VideoDetails title={video.title} description={video.excerpt} />
        </div>
      ))}
    </>
  );
};

export default VideoListDetail;
