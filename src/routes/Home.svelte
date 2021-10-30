<script lang="ts">
  import Counter from '../components/Counter.svelte'

  const name: string = 'svelte-ultimate-template'
  const src = new URL('../assets/svelte-typescript-sugarss.svg', import.meta.url).toString()
</script>

<img {src} alt="svelte-typescript-sugarss">
<h1>Hello {name}</h1>
<div>
  <Counter></Counter>
</div>