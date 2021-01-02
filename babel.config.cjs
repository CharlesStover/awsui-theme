module.exports = {
  ignore: [/node_modules\/?!@awsui\/design-tokens/],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
};
