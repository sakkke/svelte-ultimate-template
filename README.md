[![.github/workflows/main.yml](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml/badge.svg)](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/from-referrer/)
# Svelte Ultimate Template

![svelte-typescript-sugarss](src/assets/svelte-typescript-sugarss.svg)

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

## 🎉 Get started (automatic if using Gitpod)

**Requires:**

- `tmux` (used by `npm run dev`)

```sh
npx degit sakkke/svelte-ultimate-template [project-name]
cd [project-name]
npm i
npm run dev
```

### Stop `npm run dev`

1. Press `<C-b>:killw<CR>`
1. Done!

### Manually lint and test instead of `npm run dev`

#### Run Jest in watch mode

```sh
npm run test:watch
```

#### Run ESLint in watch mode

```sh
npm run lint:watch
```

#### Run Stylelint in watch mode

```sh
npm run lint:style:watch
```

## 🔰 Checklist

- [ ] Check or update `./LICENSE`
- [ ] Update `name`, `description`, `author` in `./package.json`
- [ ] Update title in `./src/index.html`
- [ ] Update assets in `./src/assets` and `./public`
- [ ] Update `./src/site.webmanifest`
- [ ] Update `./README.md`

Default assets created with:

1. [SVGPORN](https://svgporn.com/)
1. [Maskable.app](https://maskable.app/)
1. [RealFaviconGenerator](https://realfavicongenerator.net/)

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