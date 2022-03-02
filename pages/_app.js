import React, { useEffect } from "react";
const { defineCustomElements } = require("lyne-test/loader");
import '../styles.css'

function MainApp({ Component, pageProps }) {

  useEffect(() => {
    defineCustomElements(window);
  });

  return (
    <Component {...pageProps} />
  )
}

export default MainApp
