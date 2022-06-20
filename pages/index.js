import Head from 'next/head.js';
import React, { Component } from 'react';
import Container from '../components/Container.js';
import Layout from '../components/Layout.js';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../lib/constants.js';
import Home from '../components/Home';

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
