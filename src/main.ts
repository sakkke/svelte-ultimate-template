import App from './App.svelte'

if ('serviceWorker' in navigator) {
  void navigator.serviceWorker.register(new URL('./sw.ts', import.meta.url))
}

const target = document.getElementById('app') as HTMLElement

// For `parcel serve`
if (process.env.NODE_ENV !== 'production') {
  // Initialize target
  target.innerHTML = ''

  // Reload styles
  Array.from(document.querySelectorAll('link'))
    .filter(elem => elem.rel === 'stylesheet')
    .forEach(elem => { elem.href = `${elem.href}` })
}

export default new App({ target })
