<script lang="ts">
  // Deliberate error in a Svelte file, to check annotations on .svelte files
  let count: number = 'zero'

  // Deliberate Svelte warning, to check the link to Svelte's docs
  let { initial = 0 } = $props()
  let total = $state(initial)
  const doubled = total * 2
</script>

<h1>Welcome to SvelteKit</h1>
<p>{count} {doubled}</p>
