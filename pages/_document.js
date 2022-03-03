import Document, { Html, Head, Main, NextScript } from 'next/document';
import { parse } from 'node-html-parser';

const lyneComps = require("lyne-test/hydrate");

class MyDocument extends Document {

  static async getInitialProps(ctx) {

    const initialProps = await Document.getInitialProps(ctx);
    let styleContent = '';

    // hydrate the received html via stencil's renderToString method
    const renderedHtml = await lyneComps.renderToString(initialProps.html);

    // stencil is creating an fully fledged html document out of the component
    // html after hydration. we need to parse it and extract the contents
    // of the body.
    const parsedHtml = parse(renderedHtml.html);
    const renderedContent = parsedHtml.querySelector('#__next').toString();
    initialProps.html = renderedContent;

    // additionally, we need to get some attributes from the hydrated html tag
    initialProps.htmlAttrs = parsedHtml.getElementsByTagName('html')[0]._attrs;

    // we need to extract the css from the head of the hydrated result.
    const headChildNodes = parsedHtml.getElementsByTagName('head')[0].childNodes;
    headChildNodes.forEach((childNode) => {
      if (childNode.rawTagName === 'style') {
        initialProps.styles = (
          <>
            {initialProps.styles}
            <style
              sty-id={childNode.getAttribute('sty-id')}
              dangerouslySetInnerHTML={{
                __html: childNode.textContent
              }}
            />
          </>
        );
      }
    });

    return initialProps;
  }

  render() {
    return (
      <Html {...this.props.htmlAttrs}>
        <Head>
          <link crossorigin="" as="font" href="https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Roman.woff2" rel="preload" type="font/woff2"></link>
          <link crossorigin="" as="font" href="https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Bold.woff2" rel="preload" type="font/woff2"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
