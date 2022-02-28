import React from "react";
import App from "next/app";

export default class MyApp extends App {
  componentDidMount() {
    const {
      defineCustomElements
    } = require("lyne-test/loader");
    defineCustomElements(window);
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}
