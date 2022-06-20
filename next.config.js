module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tineb-test-sudipto-sudipto.vercel.app' }],
        destination: 'https://tineb-test-sudipto-sudipto.vercel.app/:path*',
        permanent: true
      },
      {
        source: '/sukhna-lake/cleanup-236-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-236-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-238-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-238-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-240-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-240-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-243-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-243-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-247-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-247-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-251-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-251-chandigarh',
        permanent: false,
      }
    ];
  },
};
