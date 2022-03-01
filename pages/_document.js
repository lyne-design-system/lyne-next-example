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

    // we need to extract the css from the head of the hydrated result.
    const headChildNodes = parsedHtml.getElementsByTagName('head')[0].childNodes;
    headChildNodes.forEach((childNode) => {
      if (childNode.rawTagName === 'style') {
        styleContent += `${childNode.childNodes[0]._rawText}`;
      }
    });

    return {
      ...initialProps,
      styles: (
        <style>
          {initialProps.styles}
          {styleContent}
        </style>
      )
    };
  }

  render() {
    return (
      <Html class="js-focus-visible hydrated" data-js-focus-visible>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
