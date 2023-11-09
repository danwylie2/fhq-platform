<script lang="ts">
	import { Input, Helper, Button } from 'flowbite-svelte';

	import RoomList from './RoomList.svelte';
	let newName = '';
	let newSize = '';
	let newRadiator = '';
	let newQuantity = 1;

	let rooms = [
		{ name: 'Bedroom 1', size: '2', radiator: 'DeLonghi D22', quantity: 6 },
		{ name: 'Bedroom 2', size: '4', radiator: 'DeLonghi D22', quantity: 2 },
		{ name: 'Bedroom 3', size: '33', radiator: 'DeLonghi D22', quantity: 4 }
	];

	function addRoom() {
		rooms = [
			...rooms,
			{ name: newName, size: newSize, radiator: newRadiator, quantity: newQuantity }
		];
		newName = '';
		newSize = '';
		newRadiator = '';
		newQuantity = 1;
		console.log(rooms);
	}

	const removeRoom = (index) => {
		rooms = rooms.filter((_, i) => i !== index);
	};
</script>

<div class="p-8">
	<RoomList roomsList={rooms} {removeRoom} />
</div>

<div class="p-8">
	<!-- <RoomInput /> -->
	<form>
		<div class="grid gap-6 mb-6 md:grid-cols-4">
			<div>
				<Input type="text" id="room_name" placeholder="Room Name" bind:value={newName} required />
			</div>
			<div>
				<Input type="text" id="room_size" placeholder="Room Size" bind:value={newSize} required />
			</div>
			<div>
				<Input
					type="text"
					id="radiator_name"
					placeholder="Radiator Name"
					bind:value={newRadiator}
					required
				/>
			</div>
			<div>
				<Input
					type="number"
					id="radiator_quantity"
					placeholder="Radiator Quantity"
					bind:value={newQuantity}
					required
					min="1"
				/>
			</div>
		</div>
		<Button on:click={addRoom}>Submit</Button>
	</form>
</div>
