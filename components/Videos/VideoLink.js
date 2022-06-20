export default function VideoLink(video) {
  return (
    <div>
      <h5 className="text-md mb-3">
        <i className="bi bi-arrow-right mr-2"></i>
        <a href={video.link} target="_blank" rel="noopener noreferrer">
          <span className="font-bold capitalize hover:underline" type="button"> {video.title}</span>
        </a>
      </h5>
    </div >
  );
}
