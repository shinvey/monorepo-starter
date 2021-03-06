import { ConfigFunction } from '@babel/core'

const configFn: ConfigFunction = (api) => {
  api.cache.forever()

  return {
    presets: [
      '@babel/preset-env',
      // 支持编译typescript https://babeljs.io/docs/en/babel-preset-typescript
      '@babel/preset-typescript',
    ],
    plugins: [
      /**
       * 转换 async/await 为 promise chain
       * https://github.com/rpetrich/babel-plugin-transform-async-to-promises
       */
      'babel-plugin-transform-async-to-promises',
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
