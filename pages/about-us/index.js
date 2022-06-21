import Head from "next/head";
import AboutDetail from "../../components/About/AboutDetail";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import { getAboutContent } from "../../lib/api";
import { HOME_OG_IMAGE_URL, ORG_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

export default function AboutUs(props) {

  return (
    <>
      <Layout>
        <Head>
          <title>About TINEB | {ORG_NAME}</title>
          <meta
            name="description"
            content={props.excerpt}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <AboutDetail content={props.content} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const about = getAboutContent([
    'date',
    'content'
  ]);

  const content = await markdownToHtml(about.content) || '';

  return {
    props: {
      ...about,
      content
    },
  };
}
