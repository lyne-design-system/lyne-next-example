[![Netlify Status](https://api.netlify.com/api/v1/badges/f73a6755-c47c-4ff0-ae6a-972df828ddf1/deploy-status)](https://app.netlify.com/sites/hungry-galileo-20fb84/deploys)

# lyne-next-example

A simple showcase as of how to use the webcomponents from lyne in NextJS, including server-side hydration and client-side hydration, build as a static site.

## Develop

To develop locally, first run

```bash
npm install
```

To run the project locally, run

```bash
npm run dev
```

To build for production with ssr, run

```bash
npm run build
```

To build for production with static assets, run

```bash
npm run build && npm run export
```

## Deployment

The Next-App is automatically deployed on netlify with every change on the main branch:
https://hungry-galileo-20fb84.netlify.app/

## Stencil rendered webcomponents, server- and client-side hydration with Nuxt vs. NextJs

### Nuxt

Initially, we tried to use Nuxt as a framework for SSR & SSG. The according source can be found here:

https://github.com/lyne-design-system/lyne-components-demo

Basically, the integration of the lyne-components is rather trivial. Nevertheless, we run into a painful issues regarding components that make use of slots. When trying to use vue-server-renderer with webcomponents that use slots, the renderer is complaining about mismatching server and client side markup/content. We did not find any solution to fix this.

### NextJs

NextJs seems to be able to handle server- and client-side hydration of the lyne-components quite well. The according source can be found here:

https://github.com/lyne-design-system/lyne-next-example

The integration is not as straightforward as it was with Nuxt.

Client-side hydration can easily be handled inside the `_app.js` file. This is pretty much the same way it can be done with Nuxt.

When it comes to server-side hydration, things are getting more complex.

Stencil offers a Tool for hydration, which has two methods. One method accepts a string containing html, the other accepts a complete html document. Both methods return a hydrated result as a html document.

For local development, the solution could be quite easy: we can setup a custom express server, and after receiving a request and before sending the html response back to client, we can intercept and hydrate the contents. Unfortunately, this does not work for the production build, since the server does not play any role here.

NextJs offers the ability to pass a custom webpack configuration. It might seem to be the ideal place for hydartion: after webpack has emitted all the assets, we can grab all html files, hydrate them and save them back to the build folder. Unfortunately, the html generation is not handled by webpack, but by some internal libs from NextJs, which are not configurable.

So the only way we found to get static server-side hydration up and running (so that it works locally during dev and on production build), was to do it in the `getInitialProps` method inside `_document.js`. But this seems to be a bit hacky. The issue is (as mentioned before), that stencil's hydration method is returning an html document. But the html we can pass to the `initialProps` in the `_document.js` excepts the contents of the body only. So this is the hacky part, when it comes to parsing the hydration result from stencil, finding the body contents, finding the style-tags in the had, and returning them inside the intial props.
