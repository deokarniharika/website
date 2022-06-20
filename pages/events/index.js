import Head from 'next/head';
import React from 'react';
import EventsList from '../../components/Event/EventsList';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllEvents } from '../../lib/api';
import { ORG_NAME } from '../../lib/constants';

export default function Index({ allEvents }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Events | {ORG_NAME}</title>
        </Head>
        <Container>
          <div className='mx-9 content-center pb-10 mb-5'>
            <h2 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
              Events
            </h2>
            {allEvents.length > 0 && <EventsList events={allEvents} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allEvents = getAllEvents([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allEvents },
  };
}
