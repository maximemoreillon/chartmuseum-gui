<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import { base } from '$app/paths';

	let topAppBar: TopAppBar;
</script>

<svelte:head>
	<!-- <base href={`/${base}/`} /> -->
	<link rel="stylesheet" href="{base}/smui.css" media="(prefers-color-scheme: light)" />
	<link
		rel="stylesheet"
		href="{base}/smui-dark.css"
		media="screen and (prefers-color-scheme: dark)"
	/>
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="fixed" color="secondary" class="mdc-elevation--z1">
	<Row>
		<Section>
			<img class="logo" src="{base}/chartmuseum.png" alt="chartmuseum-gui logo" />
			<Title>ChartMuseum GUI</Title>
		</Section>
		<!-- <Section align="end" toolbar>
				<IconButton
					href="https://github.com/maximemoreillon/chartmuseum-gui"
					target="_blank"
					class="material-icons">github</IconButton
				>
			</Section> -->
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar} class="test">
	<slot />
</AutoAdjust>

<footer>ChartMuseum GUI - <a href="https://maximemoreillon.com">Maxime Moreillon</a></footer>

<style>
	:global(main) {
		margin-inline: auto;
		max-width: 80rem;
		min-height: calc(100vh - 150px);
	}

	footer {
		text-align: center;
		padding: 1rem;
		margin-top: auto;
	}

	.logo {
		height: 2.5em;
		width: 2.5em;
	}
</style>
