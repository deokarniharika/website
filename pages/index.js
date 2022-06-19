import Head from 'next/head.js';
import React, { Component } from 'react';
import Container from '../components/Container.js';
import Layout from '../components/Layout.js';
import { ORG_NAME } from '../lib/constants.js';
import Home from '../components/Home';

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{ORG_NAME}</title>
        </Head>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
