[![.github/workflows/main.yml](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml/badge.svg)](https://github.com/sakkke/svelte-ultimate-template/actions/workflows/main.yml)

# Svelte Ultimate Template

## ✨ Features

- [x] Svelte
- [x] TypeScript
- [x] SugarSS
- [x] [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [x] Jest
- [x] ESLint with [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
- [x] Stylelint
- [x] PWA
- [x] HMR
- [x] Automated testing using GitHub Actions
- [ ] Support source map for CSS

## 🎉 Get started

```sh
npx degit sakkke/svelte-ultimate-template [project-name]
cd [project-name]
git init
npm i
npm run dev
```

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