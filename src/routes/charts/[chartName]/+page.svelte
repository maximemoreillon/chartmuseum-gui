<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Button, { Label, Icon } from '@smui/button';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import { base } from '$app/paths';

	import type Release from './release';

	export let data: { chart: Release[] };
	const { chart } = data;
	const { chartName } = $page.params;
</script>

<p>
	<Button href="{base}/charts">
		<Icon class="material-icons">arrow_left</Icon>
		<Label>Return</Label>
	</Button>
</p>

<div class="title" style="margin-top: 2em;">
	<img src={chart[0].icon || `${base}/placeholder_pkg_helm.png`} class="icon" alt="" />
	<div>
		<h2 style="margin: 0;">{chartName}</h2>
		<p>{chart[0].description}</p>
	</div>
</div>

<h3>Install</h3>
<p>Adding the repository:</p>
<div class="command">
	helm repo add chartmuseum {env.PUBLIC_CHARTMUSEUM_URL}
</div>
<p>Installing the chat:</p>
<div class="command">
	helm install {chartName} chartmuseum/{chartName} --version {chart[0].version}
</div>

<h3>Releases</h3>
<DataTable style="width: 100%;">
	<Head>
		<Row>
			<Cell>Version</Cell>
			<Cell style="width: 100%;">App version</Cell>
			<Cell>Date</Cell>
		</Row>
	</Head>
	<Body>
		{#each chart as release}
			<Row>
				<Cell>
					{release.version}
				</Cell>
				<Cell>
					{release.appVersion}
				</Cell>
				<Cell>
					{new Date(release.created).toDateString()}
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

<style>
	.command {
		background-color: #444444;
		color: white;
		padding: 1rem;
		font-family: monospace;
		font-size: 90%;
		border-radius: 4px;
	}

	.icon {
		width: 8em;
		height: 8em;
		object-fit: contain;
	}

	.title {
		display: flex;
		gap: 0 2.5em;
	}
</style>
