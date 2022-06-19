import Head from 'next/head.js';
import React, { Component } from 'react';
import Container from '../components/container.js';
import Layout from '../components/layout.js';
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
