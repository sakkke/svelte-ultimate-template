<script lang="ts">
  let count = 0

  function handleClick () {
    count++
  }
</script>

<button on:click={handleClick}>{count}</button>