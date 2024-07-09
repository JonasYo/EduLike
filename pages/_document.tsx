import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
            media="print"
            onLoad={() => {
              const link = document.createElement('link');
              link.href =
                'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap';
              link.rel = 'stylesheet';
              document.head.appendChild(link);
            }}
          />

          <link
            rel="preconnect"
            href="https://cdnjs.cloudflare.com"
            crossOrigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
            media="print"
            onLoad={() => {
              const link = document.createElement('link');
              link.href =
                'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css';
              link.rel = 'stylesheet';
              document.head.appendChild(link);
            }}
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
