import React, { useEffect } from "react";
const { defineCustomElements } = require("lyne-test/loader");

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    defineCustomElements(window);
  });

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
