module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["babel-plugin-transform-html-import-to-string", "nativewind/babel"],
  };
};
