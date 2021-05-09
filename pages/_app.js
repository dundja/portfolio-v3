import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Radivoje Dundjerovic</title>
      </Head>
      <main className="container mx-auto">
        <Header />
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
