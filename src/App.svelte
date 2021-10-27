<script lang="ts">
  import Counter from './components/Counter.svelte'
  import 'destyle.css/destyle.min.css'

  const name: string = 'svelte-ultimate-template'
</script>

<main>
  <h1>Hello {name}</h1>
  <div>
    <Counter></Counter>
  </div>
</main>

<style lang="postcss">
  main
    text-align: center
</style>