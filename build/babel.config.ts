import { ConfigFunction } from '@babel/core'

const configFn: ConfigFunction = (api) => {
  api.cache.forever()

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      // 转义react jsx https://babeljs.io/docs/en/babel-preset-react
      '@babel/preset-react',
    ],
    env: {
      build: {
        /**
         * 当BABEL_ENV=build，将ignore配置合并到当前父级ignore配置中
         */
        ignore: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.story.tsx',
          '__snapshots__',
          '__tests__',
          '__stories__',
        ],
      },
    },
    ignore: ['node_modules'],
  }
}

export default configFn
