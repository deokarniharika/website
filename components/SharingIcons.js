import { ORG_NAME } from '../lib/constants';

export default function SharingIcons({ title, path }) {
  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <a
          onClick={async () => {
            await navigator.share({
              url: path,
              title: title + ' | ' + ORG_NAME
            });
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-center mx-2"
        >
          <i className="bi bi-share-fill"></i>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-center mx-2"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${title}&url=${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-center mx-2"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-center mx-2"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href={`https://www.reddit.com/submit?url=${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-center mx-2"
        >
          <i className="bi bi-reddit"></i>
        </a>
      </div>
    </div>
  );
};
