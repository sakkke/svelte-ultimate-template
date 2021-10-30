[![.github/workflows/main.yml](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml/badge.svg)](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/sakkke/svelte-ultimate-template)
# Svelte Ultimate Template

A starter template for Progressive Web App with Svelte + TypeScript + SugarSS

[Use this template on GitHub](https://github.com/sakkke/svelte-ultimate-template/generate)

## ✨ Features

- [x] Svelte
  - [x] [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [x] TypeScript
- [x] SugarSS
- [x] PWA

### ♻️ Lint and Test

- [x] Jest
- [x] ESLint
  - [x] [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
- [x] Stylelint

### 🔨 Development

- [x] Parcel
  - [x] HMR
- [x] Automated testing using GitHub Actions
- [ ] Source map support for CSS
- [x] Gitpod support

## 🎉 Get started

```sh
npx degit sakkke/svelte-ultimate-template [project-name]
cd [project-name]
npm i
npm run dev
```

### Stop `npm run dev`

1. Press `<C-b>:killw<CR>`
1. Done!

## 🚀 Deploy

`.github/workflows/main.yml`

```diff
on: push

jobs:
+ deploy:
+   needs: test
+   runs-on: ubuntu-latest
+   steps:
+     - uses: actions/checkout@v2
+     - uses: actions/setup-node@v2
+       with:
+         node-version: '16'
+         cache: npm
+     - run: npm ci
+     - run: npm run build
+     - uses: peaceiris/actions-gh-pages@v3
+       with:
+         github_token: ${{ secrets.GITHUB_TOKEN }}
+         publish_dir: ./public
+
  test:
    ...
```

## 📄 License

Unlicense