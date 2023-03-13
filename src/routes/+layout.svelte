<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed" color="secondary" class="mdc-elevation--z1">
	<Row>
		<Section>
			<img class="logo" src="/chartmuseum.png" alt="chartmuseum-gui logo" />
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
