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
      },
      {
        source: '/sanjay-vann/clean-up/237-punya-farewell-plogging-party.html',
        destination: '/events/sanjay-vann-clean-up-237',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/241.html',
        destination: '/events/sanjay-vann-clean-up-241',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/244.html',
        destination: '/events/sanjay-vann-clean-up-244',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/248.html',
        destination: '/events/sanjay-vann-clean-up-248',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/252-geetika-vinamra.html',
        destination: '/events/sanjay-vann-clean-up-252',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/256-getting-lost.html',
        destination: '/events/sanjay-vann-clean-up-256',
        permanent: false,
      },
      {
        source: '/lucknow/cleanup-245.html',
        destination: '/events/lucknow-cleanup-245',
        permanent: false,
      },
      {
        source: '/central-park/clean-up/2-yellow-bags-and-takeaways.html',
        destination: '/events/central-park-clean-up-2',
        permanent: false,
      }
    ];
  },
};
