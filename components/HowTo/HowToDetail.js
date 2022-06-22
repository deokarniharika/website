import Link from 'next/link';
import { useRouter } from 'next/router';
import markdownStyles from '../markdown-styles.module.css';
import SharingIcons from '../SharingIcons';

const HowToDetail = ({ slug, title, category, date, content }) => {
  const { asPath } = useRouter();

  return (
    <div className="py-5 w-3/4 lg:w-full mx-auto flex flex-col">
      <span className="absolute font-bold top-4 left-5 lg:left-[25%] text-accent-3 text-md w-20">{category}</span>
      <h2 className="text-accent-3 font-bold text-3xl">{title}</h2>
      <div className={markdownStyles['markdown'] + ' ' + markdownStyles['steps']} dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className='my-0'>
        <SharingIcons title={title} path={asPath} />
      </div>
      <div className="text-center text-accent-3 mt-5 text-sm mb-10 pb-5">
        <Link href='/how-to'>
          <a className="text-accent-3">Go Back</a>
        </Link>
      </div>
    </div >
  );
};

export default HowToDetail;
