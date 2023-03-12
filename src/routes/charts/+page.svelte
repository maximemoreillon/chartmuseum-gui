<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	// import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	import ChartCard from '$lib/ChartCard.svelte';

	export let data: { charts: any };
	const { charts } = data;

	const chartNames = Object.keys(charts);

	let search = '';

	$: filteredChartNames = search
		? chartNames.filter((chartName) => chartName.toLocaleLowerCase().includes(String(search)))
		: chartNames;
</script>

<h2>Charts</h2>

<p>
	<Textfield bind:value={search} label="Search" input$emptyValueUndefined>
		<Icon class="material-icons" slot="trailingIcon">search</Icon>
	</Textfield>
</p>

<DataTable style="width: 100%;">
	<Head>
		<Row>
			<Cell>Icon</Cell>
			<Cell>Name</Cell>
			<Cell style="width: 100%;">Description</Cell>
			<Cell>Version</Cell>
		</Row>
	</Head>
	<Body>
		{#each filteredChartNames as chartName}
			<Row>
				<Cell>
					<img
						class="chart_icon"
						src={charts[chartName][0].icon || '/placeholder_pkg_helm.png'}
						alt=""
					/>
				</Cell>
				<Cell>
					<a href={`/charts/${chartName}`}>
						{chartName}
					</a>
				</Cell>
				<Cell>
					{charts[chartName][0].description}
				</Cell>
				<Cell>
					{charts[chartName][0].version}
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
</style>
