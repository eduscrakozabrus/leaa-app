module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [
      'react-native-classname-to-style',
      ['react-native-platform-specific-extensions', { extensions: ['less'] }],
      [
        'import',
        {
          libraryName: '@ant-design/react-native',
        },
      ],
      [
        'module-resolver',
        {
          // root: ['.'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  };
};
