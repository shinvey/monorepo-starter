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
  rules: {
    'import/no-extraneous-dependencies': ['error'],
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
