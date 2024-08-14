import { enableNextSsr } from '@uniformdev/context-next';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import { createUniformContext } from '../lib/context/uniformContext';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const serverTracker = createUniformContext(ctx);
    enableNextSsr(ctx, serverTracker);
    return await Document.getInitialProps(ctx);
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon/favicon.ico" rel="icon" />
          <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" />
          <meta name="description" content="UniformConf, a Uniform content demo site" />
        </Head>        
        <body className="leading-normal tracking-normal text-white gradient">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
