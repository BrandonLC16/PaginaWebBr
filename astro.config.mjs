import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.lcbrandon.com.mx',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'never',
  },
});
