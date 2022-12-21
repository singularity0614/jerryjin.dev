import '../app/globals.css';
import Head from 'next/head';
import favicon from '../public/favicon-128x128.png';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://use.typekit.net/usx0uee.css" />
        <link rel="icon" type="image/png" href={favicon.src} sizes="128x128" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
