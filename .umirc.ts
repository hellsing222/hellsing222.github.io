import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  extraBabelPlugins: [
    [
        "import",
        {
          libraryName: "antd-mobile",
          customName: (name: string) => `antd-mobile/es/components/${name}`,
          libraryDirectory: "es",
         
        },
      ],
  ],
});