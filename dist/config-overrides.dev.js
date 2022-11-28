"use strict";

module.exports = function override(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });
  return webpackConfig;
};
//# sourceMappingURL=config-overrides.dev.js.map
