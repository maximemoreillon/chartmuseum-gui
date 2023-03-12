<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	export let data: { charts: any[] };
	const { charts } = data;

	const chartNames = Object.keys(charts);

	let search = '';

	$: filteredChartNames = search
		? chartNames.filter((chartName) => chartName.toLocaleLowerCase().includes(String(search)))
		: chartNames;
</script>

<div class="breadcrumps">
	<span>Charts</span>
	<span>/</span>
</div>

<h2>Charts</h2>

<p>
	<Textfield bind:value={search} label="Search" input$emptyValueUndefined>
		<Icon class="material-icons" slot="trailingIcon">search</Icon>
	</Textfield>
</p>

<DataTable style="width: 100%;">
	<Head>
		<Row>
			<Cell style="width: 100%;">Name</Cell>
		</Row>
	</Head>
	<Body>
		{#each filteredChartNames as chartName}
			<Row>
				<Cell>
					<a href={`/charts/${chartName}`}>
						{chartName}
					</a>
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
