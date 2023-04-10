<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	// TODO: find better way
	onMount(() => {
		goto(`${base}/charts`);
	});
</script>
