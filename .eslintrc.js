module.exports = {
	"extends": "standard-with-typescript",
  "overrides": [
    { "files": ["*.svelte"], "processor": "svelte3/svelte3" }
  ],
  "parser": "@typescript-eslint/parser",
	"parserOptions": {
    "extraFileExtensions": [".svelte"],
		"project": "./tsconfig.json"
	},
  "plugins": [
    "@typescript-eslint",
    "svelte3"
  ],
  "rules": {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 2, "maxEOF": 0 }], // ref: https://github.com/sveltejs/eslint-plugin-svelte3/issues/41#issuecomment-569529661
    "no-use-before-define": "off"
  },
  "settings": {
    "svelte3/ignore-styles": () => true,
    "svelte3/typescript": true
  }
}
