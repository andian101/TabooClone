module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Pages: './src/Pages',
          Models: './src/Models',
          Routes: './src/Routes',
          components: './src/components',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
