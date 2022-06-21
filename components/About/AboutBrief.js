import Link from "next/link";

export default function AboutBrief({ about, preview }) {
  return (
    <>
      <img className="" src="/assets/noearthb.jpeg" alt="" style={{
        minHeight: '14em',
        overflow: 'hidden',
        objectFit: 'cover'
      }} />
      <div className='flex-1 flex flex-col items-center justify-center py-10 mt-4'>
        <div className='text-center text-3xl text-accent-1 capitalize font-bold'>
          Who We Are?
        </div>
        <div className='text-justify text-md text-accent-1 w-3/4 mt-5'>
          {about.excerpt}
        </div>
        <div className="p-5 cursor-pointer">
          <Link href={'/about-us'}>
            <a className="inline-flex items-center mt-1 py-2 px-4 text-2xl font-bold text-center text-accent-2 bg-accent-1 rounded-lg focus:ring-4 focus:outline-none focus:ring-accent-1 mb-3">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
