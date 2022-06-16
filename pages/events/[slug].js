import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import EventBody from '../../components/event-body';
import Header from '../../components/header';
import EventHeader from '../../components/event-header';
import Layout from '../../components/layout';
import { getEventBySlug, getAllEvents } from '../../lib/api';
import EventTitle from '../../components/event-title';
import Head from 'next/head';
import { ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Event({ event, moreEvents, preview }) {
  const router = useRouter();

  if (!router.isFallback && !event?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <div className='w-3/4 m-auto'>
          <Header />
          {router.isFallback ? (
            <EventTitle>Loading…</EventTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {event.title} | {ORG_NAME}
                  </title>
                  <meta property="og:image" content={event.ogImage.url} />
                </Head>
                <EventHeader
                  title={event.title}
                  coverImage={event.coverImage}
                  date={event.date}
                  author={event.author}
                />
                <EventBody content={event.content} />
              </article>
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const event = getEventBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: {
        ...event,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const events = getAllEvents(['slug']);

  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.slug,
        },
      };
    }),
    fallback: false,
  };
}
