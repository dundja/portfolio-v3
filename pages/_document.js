import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="description"
            content="Fullstack web developer. Tech lover and enthusiast. Love to break, debug
            and fix stuff. Every day is opportunity to improve. Learn at least one new
            thing each day. Organisation is key. Team player forever. Any kind of
            sport."
          />
          <meta
            name="keyword"
            content="portfolio, javascript, developer, web developer, frontend engineer, frontned, react, reactjs, next, nextjs, frontend web developer, full stack, fullstack, full stack web developer, fullstack web developer, nodejs, firebase, tailwind"
          />

          {/* Open graph tags */}
          <meta
            property="og:title"
            content="Radivoje Dundjerovic | Web developer"
          />
          <meta
            property="og:description"
            content="Fullstack web developer. Tech lover and enthusiast. Love to break, debug
            and fix stuff. Every day is opportunity to improve. Learn at least one new
            thing each day. Organisation is key. Team player forever. Any kind of
            sport."
          />
          <meta
            property="og:image"
            content="/favicon/android-chrome-512x512.png"
          />
          <meta property="og:url" content="https://www.dundja-dev.com" />
          <meta property="og:type" content="website" />
          {/* Twitter */}
          <meta
            name="twitter:card"
            content="/favicon/android-chrome-512x512.png"
          />
          <meta
            name="twitter:title"
            content="Radivoje Dundjerovic | Web developer"
          />
          <meta
            name="twitter:description"
            content="Fullstack web developer. Tech lover and enthusiast. Love to break, debug
            and fix stuff. Every day is opportunity to improve. Learn at least one new
            thing each day. Organisation is key. Team player forever. Any kind of
            sport."
          />
          <meta
            name="twitter:image"
            content="/favicon/android-chrome-512x512.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
