<script>
	export let roomsList = [];
	export let removeRoom;

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Button
	} from 'flowbite-svelte';
</script>

<Table hoverable={true}>
	<TableHead>
		<TableHeadCell>Room name</TableHeadCell>
		<TableHeadCell>Room Size</TableHeadCell>
		<TableHeadCell>Radiator</TableHeadCell>
		<TableHeadCell>Quantity</TableHeadCell>
		<TableHeadCell>
			<span class="sr-only">Delete</span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each roomsList as room, index}
			<TableBodyRow>
				<TableBodyCell>{room.name}</TableBodyCell>
				<TableBodyCell>{room.size}</TableBodyCell>
				<TableBodyCell>{room.radiator}</TableBodyCell>
				<TableBodyCell>{room.quantity}</TableBodyCell>
				<TableBodyCell>
					<Button on:click={() => removeRoom(index)}>X</Button>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
