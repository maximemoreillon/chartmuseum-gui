<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import { PUBLIC_CHARTMUSEUM_URL } from '$env/static/public';
	import type Release from './release';

	export let data: { chart: Release[] };
	const { chart } = data;
	const { chartName } = $page.params;
</script>

<div class="breadcrumps">
	<a href="/charts">Charts</a>
	<span>/</span>
	<span>{chartName}</span>
</div>

<h2>{chartName}</h2>
<p>{chart[0].description}</p>

<h3 style="margin-bottom:1rem;">Install</h3>
<div class="command">
	<p>
		helm repo add chartmuseum {env.PUBLIC_CHARTMUSEUM_URL}
	</p>
	<p>
		helm install my-{chartName} chartmuseum/{chartName} --version {chart[0].version}
	</p>
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
		padding: 0.25rem 1rem;
		font-family: monospace;
	}
</style>
