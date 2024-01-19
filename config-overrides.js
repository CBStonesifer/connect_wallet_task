
module.exports = function override(config, env) {
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    zlib: require.resolve("browserify-zlib"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
  };
  return config;
};