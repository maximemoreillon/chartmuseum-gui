<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	// TODO: find better way
	onMount(() => {
		goto('/charts');
	});
</script>
