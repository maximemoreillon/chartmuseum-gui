<script lang="ts">
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';

	export let chart: any;
</script>

<Card>
	<Media class="card-media-16x9" aspectRatio="16x9">
		<MediaContent>
			<img src={chart[0].icon} alt="" />
		</MediaContent>
	</Media>
	<Content class="mdc-typography--body2">
		<h2 class="mdc-typography--headline6" style="margin: 0;">{chart[0].name}</h2>
		<h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">
			v{chart[0].version}
		</h3>
		{chart[0].description}
	</Content>
	<!-- <Actions>
		<ActionButtons>
			<Button>
				<Label>Action</Label>
			</Button>
			<Button>
				<Label>Another</Label>
			</Button>
		</ActionButtons>
		<ActionIcons>
			<IconButton toggle aria-label="Add to favorites" title="Add to favorites">
				<Icon class="material-icons" on>favorite</Icon>
				<Icon class="material-icons">favorite_border</Icon>
			</IconButton>
			<IconButton class="material-icons" title="Share">share</IconButton>
			<IconButton class="material-icons" title="More options">more_vert</IconButton>
		</ActionIcons>
	</Actions> -->
</Card>
