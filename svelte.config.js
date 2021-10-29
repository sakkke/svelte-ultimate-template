const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
const preprocess = require('svelte-preprocess')

module.exports = {
  preprocess: preprocess({
    async postcss ({ content }) {
      const { default: stripIndent } = await import('strip-indent')
      const css = stripIndent(content)
      if (/{/.test(css)) return { code: css }
      const { plugins, options } = postcssrc.sync()
      const { parser } = options
      const { css: code } = await postcss(plugins).process(css, { from: undefined, parser })
      return { code }
    }
  })
}
