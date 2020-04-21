/* eslint  prefer-rest-params: 0 */

import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';

const MetaData = () => {
  React.useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const gtag = () => {
      window.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'UA-69537450-7');
  }, [])

  const getDescription = () => (
    'Track the biggest wildfires globally.'
  )

  const getTitle = () => (
    'Track Wildfires'
  )

  return (
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Saira:400,700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/images/favicon.ico" />

      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
      <meta httpEquiv="content-language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://trackwildfires.com" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://trackwildfires.com" />
      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:image" content="https://trackwildfires.com/images/meta-image.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://trackwildfires.com" />
      <meta property="twitter:title" content={getTitle()} />
      <meta property="twitter:description" content={getDescription()} />
      <meta property="twitter:image" content="https://trackwildfires.com/images/meta-image.png" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69537450-7" />
    </Head>
  );
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MetaData);
