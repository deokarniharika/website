import Container from '../components/container';
import MoreEvents from '../components/more-events';
import HeroEvent from '../components/hero-event';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllEvents } from '../lib/api';
import Head from 'next/head';
import { ORG_NAME } from '../lib/constants';

export default function Index({ allEvents }) {
  const heroEvent = allEvents[0];
  const moreEvents = allEvents.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{ORG_NAME}</title>
        </Head>
        <Container>
          <div className='w-3/4 m-auto'>
            <Intro />
            <div className='content-center'>
              {heroEvent && (
                <HeroEvent
                  title={heroEvent.title}
                  coverImage={heroEvent.coverImage}
                  date={heroEvent.date}
                  author={heroEvent.author}
                  slug={heroEvent.slug}
                  excerpt={heroEvent.excerpt}
                />
              )}
              {moreEvents.length > 0 && <MoreEvents events={moreEvents} />}
            </div>
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
    'excerpt',
  ]);

  return {
    props: { allEvents },
  };
}
