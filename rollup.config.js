import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = './lib/index.js';

const getUmdOptions = ({ minify }) => {
  return {
    input,
    output: {
      file: `dist/react-updates${minify ? '.min.js' : '.js'}`,
      format: 'umd',
      name: 'ReactUpdates',
      globals: { react: 'React', 'react-dom': 'ReactDOM' },
    },
    external: ['react', 'react-dom'],
    plugins: [resolve(), commonjs(), minify ? terser() : null],
  };
};

export default [
  getUmdOptions({ minify: false }),
  getUmdOptions({ minify: true }),
  {
    input,
    output: { file: pkg.main, format: 'cjs', preferConst: true },
    external: /^(?![./])/,
    plugins: [resolve()],
  },
  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external: /^(?![./])/,
    plugins: [resolve()],
  },
];
