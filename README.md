[![.github/workflows/main.yml](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml/badge.svg)](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml)

# Svelte Ultimate Template

[Use this template on GitHub](https://github.com/sakkke/svelte-ultimate-template/generate)

## ✨ Features

- [x] Svelte
- [x] TypeScript
- [x] SugarSS
- [x] [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [x] PWA

### ♻️ Lint and Test

- [x] Jest
- [x] ESLint with [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
- [x] Stylelint

### 🔨 Development

- [x] Parcel
- [x] HMR
- [x] Automated testing using GitHub Actions
- [ ] Source map support for CSS

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