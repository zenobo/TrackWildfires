const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const Constants = require('./data/constants');
const Utility = require('./utility');

module.exports = withSass(withCSS({
    async exportPathMap() {

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = Constants.fires.reduce(
      (pages, fire) =>
        Object.assign({}, pages, {
          [`/${Utility.cleanName(fire.name)}`]: { page: `/single`, query: {fire: `${fire.name}`} },
        }),
      {}
    );

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' },
    })
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  sassLoaderOptions: {
    data: '@import "../../style/theme/index.scss";'
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnWarning: false
        }
      })
    }
    return config
  }
}))
