import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Radivoje Dundjerovic</title>
      </Head>
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
