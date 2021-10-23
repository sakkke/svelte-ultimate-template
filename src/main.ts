import App from './App.svelte'

if ('serviceWorker' in navigator) {
  void navigator.serviceWorker.register(new URL('./sw.ts', import.meta.url))
}

export default new App({ target: document.getElementById('app') as HTMLElement })
