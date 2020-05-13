// noinspection JSUnusedGlobalSymbols
export default {
  stories: ['../packages/**/*.stories.[tj]s*'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        require.resolve('babel-loader'),
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
