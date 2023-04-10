<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import { base } from '$app/paths';

	import ChartCard from '$lib/ChartCard.svelte';

	export let data: { charts: any };
	const { charts } = data;

	const chartNames = Object.keys(charts);

	let search = '';

	$: filteredChartNames = search
		? chartNames.filter((chartName) => chartName.toLocaleLowerCase().includes(String(search)))
		: chartNames;
</script>

<div class="top">
	<h2>Charts</h2>
	<p>
		<Textfield bind:value={search} label="Search" input$emptyValueUndefined>
			<Icon class="material-icons" slot="trailingIcon">search</Icon>
		</Textfield>
	</p>
</div>

<DataTable style="width: 100%;">
	<Head>
		<Row>
			<Cell />
			<Cell>Name</Cell>
			<Cell style="width: 100%;">Description</Cell>
			<Cell>Version</Cell>
			<Cell>Date</Cell>
		</Row>
	</Head>
	<Body>
		{#each filteredChartNames as chartName}
			<Row>
				<Cell>
					<img
						class="chart_icon"
						src={charts[chartName][0].icon || `${base}/placeholder_pkg_helm.png`}
						alt=""
					/>
				</Cell>
				<Cell>
					<a href={`charts/${chartName}`}>
						{chartName}
					</a>
				</Cell>
				<Cell>
					{charts[chartName][0].description}
				</Cell>
				<Cell>
					{charts[chartName][0].version}
				</Cell>
				<Cell>
					{new Date(charts[chartName][0].created).toDateString()}
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

<style>
	.chart_icon {
		height: 3em;
		width: 3em;
		object-fit: contain;
		margin: 0.5em;
	}

	.top {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.top p {
		margin-left: auto;
	}
</style>
