import { defineConfig } from 'dumi';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components', '/mdx'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'Woo UI is an UI component library',
  footer: 'Made with dumi + lobehub theme by Woo',
  name: 'Woo-UI',
  title: 'Woo-UI',
  logo: 'https://avatars.githubusercontent.com/u/20351654?v=4',
};

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  base: '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://npm.elemecdn.com/@lobehub/assets-favicons/assets/favicon.ico',
  ],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  themeConfig,
  title: 'Woo UI',
});
