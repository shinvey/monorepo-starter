import { TSESLint } from '@typescript-eslint/experimental-utils'

// noinspection JSUnusedGlobalSymbols
export default {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      version: 'detect'
    }
  },
  plugins: [
    'testing-library'
  ],
  rules: {
    'no-return-assign': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': ['error'],
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.{test,spec,stories}.ts{,x}'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
      },
    },
  ],
} as TSESLint.Linter.Config
