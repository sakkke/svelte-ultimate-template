<script lang="ts">
  import Home from './routes/Home.svelte'
  import NotFound from './routes/NotFound.svelte'
  import 'destyle.css/destyle.min.css'
  import Router from 'svelte-spa-router'
  import type { RouteDefinition } from 'svelte-spa-router'

  const routes: RouteDefinition = {
    '/': Home,
    '*': NotFound
  }
</script>

<main>
  <Router {routes}></Router>
</main>

<style lang="postcss">
  main
    text-align: center
</style>