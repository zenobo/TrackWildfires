/* eslint  prefer-rest-params: 0 */

import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class MetaData extends React.Component {
  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    const gtag = () => {
      window.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'UA-69537450-7');
  }

  getDescription = () => {
    return 'Track the biggest wildfires globally.'
  }

  getTitle = () => {
    return 'Track Wildfires';
  }

  render() {
    return (
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Saira:400,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/favicon.ico" />

        <title>{this.getTitle()}</title>
        <meta name="description" content={this.getDescription()} />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://trackwildfires.com`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trackwildfires.com" />
        <meta property="og:title" content={this.getTitle()} />
        <meta property="og:description" content={this.getDescription()} />
        <meta property="og:image" content="https://trackwildfires.com/images/meta-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trackwildfires.com" />
        <meta property="twitter:title" content={this.getTitle()} />
        <meta property="twitter:description" content={this.getDescription()} />
        <meta property="twitter:image" content="https://trackwildfires.com/images/meta-image.png" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69537450-6" />
      </Head>
    );
  }
}

MetaData.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MetaData);
