const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const path = require('path');

const moatLoader = (source) => {
  console.log(source)
}

module.exports = (config, env) => {
  if (!config.plugins) {
      config.plugins = [];
  }

  config.plugins.push(
    new FilterWarningsPlugin({
      exclude: /Critical dependency: the request of a dependency is an expression/,
    }),
  );


  if (!config.module) {
    config.module = {};
  }

  if (!config.module.rules) {
    config.module.rules = [];
  }

  config.module.rules.push({
    test: /moat-loader\/index\.js$/,
    use: [
      {
        loader: path.resolve('./webpack/loader.js'),
        options: {/* ... */}
      }
    ]
  })

  return config;
}
