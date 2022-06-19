import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className='dark:bg-accent-2 dark:text-accent-1 bg-accent-1 text-accent-2'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
