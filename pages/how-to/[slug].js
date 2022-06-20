import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/LayoutVariant';
import { getHowToBySlug, getAllHowTos } from '../../lib/api';
import Head from 'next/head';
import { ORG_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Loader from '../../components/Loader';
import HowToDetail from '../../components/HowTo/HowToDetail.js';

export default function HowTo({ howTo, moreHowTos, preview }) {
  const router = useRouter();

  if (!router.isFallback && !howTo?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout align='right'>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <Head>
              <title>
                {howTo.title} | {ORG_NAME}
              </title>
            </Head>
            <article className="mb-32">
              <HowToDetail
                slug={howTo.slug}
                title={howTo.title}
                category={howTo.category}
                date={howTo.date}
                content={howTo.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const howTo = getHowToBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'category',
    'content',
  ]);

  const content = await markdownToHtml(howTo.content || '');

  return {
    props: {
      howTo: {
        ...howTo,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const howTos = getAllHowTos(['slug']);
  return {
    paths: howTos.map((howTo) => {
      return {
        params: {
          slug: howTo.slug,
        },
      };
    }),
    fallback: false,
  };
}
