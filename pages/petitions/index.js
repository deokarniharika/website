import Head from 'next/head';
import React from 'react';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import HeroPetition from '../../components/Petitions/HeroPetition';
import LatestPetitions from '../../components/Petitions/LatestPetitions';
import { getAllPetitions } from '../../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';

export default function Index({ allPetitions }) {
  const heroPetition = allPetitions[0];
  return (
    <>
      <Layout>
        <Head>
          <title>Petitions | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center mx-auto'>
            {heroPetition && (
              <HeroPetition
                title={heroPetition.title}
                coverImage={heroPetition.coverImage}
                link={heroPetition.link}
                content={heroPetition.content}
                slug={heroPetition.slug}
              />
            )}
          </div>
          <div className='mx-9 content-center'>
            {allPetitions.length > 0 && <LatestPetitions petitions={allPetitions} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPetitions = getAllPetitions([
    'title',
    'date',
    'slug',
    'link',
    'coverImage',
    'content'
  ]);

  return {
    props: { allPetitions },
  };
}
