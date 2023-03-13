<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let topAppBar: TopAppBar;
</script>

<!-- <div class="app-content"> -->
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

<!-- <footer>ChartMuseum GUI - <a href="https://maximemoreillon.com">Maxime Moreillon</a></footer>
</div> -->
<style>
	:global(main) {
		/* width: 100%; */
		margin-inline: auto;
		max-width: 80rem;
	}

	.app-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
	}

	footer {
		padding: 1rem;
		margin-top: auto;
	}

	.logo {
		height: 2.5em;
		width: 2.5em;
	}
</style>
