import React, { useEffect } from "react";
const { defineCustomElements } = require("@sbb-esta/lyne-components/loader");
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
