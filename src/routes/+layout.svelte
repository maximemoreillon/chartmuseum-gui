<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed" color="secondary" class="mdc-elevation--z1">
	<Row>
		<Section>
			<img class="logo" src="/chartmuseum.png" alt="" />
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
<AutoAdjust {topAppBar} style="min-height: 100%;">
	<main>
		<slot />
	</main>
</AutoAdjust>

<style>
	main {
		max-width: 80rem;
		margin-inline: auto;
	}

	footer {
		margin-top: auto;
	}

	.logo {
		height: 2.5em;
		width: 2.5em;
	}
</style>
