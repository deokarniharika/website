import Link from 'next/link';
import { useRouter } from 'next/router';
import { ORG_NAME } from '../../lib/constants';
import FormattedDate from '../FormattedDate';
import markdownStyles from '../markdown-styles.module.css';
import SharingIcons from '../SharingIcons';

export default function BlurbDetail({ title, coverImage, author, date, content }) {
  const { asPath } = useRouter();

  return (
    <>
      <div>
        <div className='my-5 mt-6 w-11/12 mx-auto flex flex-row justify-between'>
          <div>
            <i className='bi bi-arrow-left mr-2'></i>
            <Link href='/events/'>Go Back</Link>
          </div>
          <div>
            Share
            <a
              onClick={async () => {
                await navigator.share({
                  url: asPath,
                  title: title + ' | ' + ORG_NAME
                });
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-center ml-2"
            >
              <i className="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
        <h2 className='text-2xl text-center mt-5 font-bold'>{title}</h2>
        <div className="mb-5 text-sm italic text-center lowercase">
          Posted on <FormattedDate dateString={date} />
          <br />
          <strong>{author}</strong>
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 w-full">
        <img src={coverImage} />
      </div>
      <div className="w-3/4 text-justify mx-auto mb-8">
        <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className='my-5 text-center'>
        <div className='mt-4'>
          <SharingIcons title={title} path={asPath} />
        </div>
      </div>
    </>
  );
}
