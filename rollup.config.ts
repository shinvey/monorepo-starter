import multiInput from 'rollup-plugin-multi-input'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'
import rollupTypescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'

export default {
  input: [
    // 全部bundle在一起的版本
    'src/main.+(j|t)s*(x)',
    // 分别bundle的版本
    'src/*/index.+(j|t)s*(x)',
  ],
  output: [
    // {
    //   format: 'cjs',
    //   dir: 'cjs',
    //   exports: 'named'
    // },
    {
      format: 'es',
      dir: 'dist/es',
      exports: 'named',
    },
  ],
  plugins: [
    del({ targets: ['dist', 'cjs', 'esm', 'es'] }),
    // Preferably set as first plugin.
    peerDepsExternal(),
    resolve(),
    multiInput(),
    rollupTypescript(),
    commonjs(),
    babel({
      // 如果考虑和外部引用项目共享babel helper代码 https://brunoscopelliti.com/a-simple-babel-optimization-i-recently-learned/
      // plugins: ['@babel/plugin-external-helpers'],
      // externalHelpers: true,
      exclude: 'node_modules/**', // only transpile our source code
    }),
    postcss(),
    image(),
    process.env.MODE === 'production' && terser(),
  ],
}
