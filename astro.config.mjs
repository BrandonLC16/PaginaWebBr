import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lcbrandon.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'never',
  },
});
