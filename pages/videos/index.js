import Head from 'next/head';
import React from 'react';
import VideosList from '../../components/Videos/VideosList';
import VideosListDetail from '../../components/Videos/VideosListDetail';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllVideos } from '../../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';

export default function Index({ allVideos }) {
  const latestVideos = allVideos.slice(0, 3);
  const moreVideos = allVideos.slice(3);

  return (
    <>
      <Layout>
        <Head>
          <title>Videos | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center mx-auto'>
            <h1 className="mt-5 mb-6 text-3xl text-accent-3 text-center font-bold">
              Videos
            </h1>
            {latestVideos.length > 0 && <VideosListDetail videos={latestVideos} />}
          </div>
          <div className="mx-auto uppercase text-xl font-bold my-8 text-center py-4 bg-accent-2 text-accent-1">
            Watch more videos
          </div>
          <div className='mx-auto mx-9 content-center pb-10 mb-8 lg:w-1/2 lg:pl-[7.5%]'>
            {moreVideos.length > 0 && <VideosList videos={moreVideos} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allVideos = getAllVideos([
    'title',
    'date',
    'slug',
    'link',
    'excerpt'
  ]);

  return {
    props: { allVideos },
  };
}
