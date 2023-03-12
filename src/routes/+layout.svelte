<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed" color="secondary">
	<Row>
		<Section>
			<img class="logo" src="/chartmuseum.png" alt="" />
			<Title>ChartMuseum GUI</Title>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<main>
		<slot />
	</main>
</AutoAdjust>

<style>
	main {
		max-width: 80rem;
		margin-inline: auto;
	}

	.logo {
		height: 2.5em;
		width: 2.5em;
	}
</style>
