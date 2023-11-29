<script lang="ts">
	// import RoomListContainer from '../lib/components/RoomListContainer.svelte';
	// import DetailsForm from '../lib/components/DetailsForm.svelte';
	import { Input, Checkbox, Label, Textarea, Select, Helper, Button } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { Section } from 'flowbite-svelte-blocks';
	export let data: PageData;

	const { form, errors, constraints } = superForm(data.form);

	// let states = [
	// 	{ value: 'ACT', name: 'ACT' },
	// 	{ value: 'NSW', name: 'NSW' },
	// 	{ value: 'NT', name: 'NT' },
	// 	{ value: 'QLD', name: 'QLD' },
	// 	{ value: 'SA', name: 'SA' },
	// 	{ value: 'VIC', name: 'VIC' },
	// 	{ value: 'WA', name: 'WA' }
	// ];

	let states = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'VIC', 'WA'];

	let sameAddress = false;
	let siteDisabled = true;
	function copyAddress() {
		if (sameAddress) {
			$form.site_address_line1 = $form.address_line1;
			$form.site_suburb = $form.suburb;
			$form.site_state = $form.state;
			$form.site_postcode = $form.postcode;
			$form.site_country = $form.country;
			siteDisabled = false;
		} else {
			$form.site_address_line1 = '';
			$form.site_suburb = '';
			$form.site_state = '';
			$form.site_postcode = '';
			$form.site_country = '';
			siteDisabled = true;
		}
	}
</script>

<SuperDebug data={$form} />

<div class="p-8">
	<!-- <RoomListContainer />
	<DetailsForm /> -->
	<form method="POST">
		<div class="p-8">
			<div class="mb-6">
				<Label
					>First Name
					<Input
						type="text"
						name="first_name"
						aria-invalid={$errors.first_name ? 'true' : undefined}
						bind:value={$form.first_name}
						{...$constraints.first_name}
					/>
				</Label>
				{#if $errors.first_name}<span class="invalid">{$errors.first_name}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="last_name"
					>Last Name
					<Input
						type="text"
						name="last_name"
						aria-invalid={$errors.last_name ? 'true' : undefined}
						bind:value={$form.last_name}
						{...$constraints.last_name}
					/>
				</Label>
				{#if $errors.last_name}<span class="invalid">{$errors.last_name}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="address_line1"
					>Address
					<Input
						type="text"
						name="address_line1"
						aria-invalid={$errors.address_line1 ? 'true' : undefined}
						bind:value={$form.address_line1}
						{...$constraints.address_line1}
					/>
				</Label>
				{#if $errors.address_line1}<span class="invalid">{$errors.address_line1}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="suburb"
					>Suburb
					<Input
						type="text"
						name="suburb"
						aria-invalid={$errors.suburb ? 'true' : undefined}
						bind:value={$form.suburb}
						{...$constraints.suburb}
					/>
				</Label>
				{#if $errors.suburb}<span class="invalid">{$errors.suburb}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="state"
					>State
					<Select name="state" bind:value={$form.state}>
						{#each states as state}
							<option value={state}>{state}</option>
						{/each}
					</Select>
				</Label>

				{#if $errors.state}<p>{$errors.state}</p>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="postcode"
					>Postcode
					<Input
						type="text"
						name="postcode"
						aria-invalid={$errors.postcode ? 'true' : undefined}
						bind:value={$form.postcode}
						{...$constraints.postcode}
					/>
				</Label>
				{#if $errors.postcode}<span class="invalid">{$errors.postcode}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="country"
					>Country
					<Input
						type="text"
						name="country"
						aria-invalid={$errors.country ? 'true' : undefined}
						bind:value={$form.country}
						{...$constraints.country}
					/>
				</Label>
				{#if $errors.country}<span class="invalid">{$errors.country}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="phone"
					>Phone
					<Input
						type="text"
						name="phone"
						aria-invalid={$errors.phone ? 'true' : undefined}
						bind:value={$form.phone}
						{...$constraints.phone}
					/>
				</Label>
				{#if $errors.phone}<span class="invalid">{$errors.phone}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="email"
					>E-mail
					<Input
						type="email"
						name="email"
						aria-invalid={$errors.email ? 'true' : undefined}
						bind:value={$form.email}
						{...$constraints.email}
					/>
				</Label>
				{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
			</div>
		</div>

		<hr />

		<div class="p-8">
			<div class="mb-6">
				<Checkbox bind:checked={sameAddress} on:change={copyAddress}>
					Site address same as customer address</Checkbox
				>
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="site_address_line1"
					>Address
					<Input
						type="text"
						name="site_address_line1"
						placeholder="Address"
						aria-invalid={$errors.site_address_line1 ? 'true' : undefined}
						bind:value={$form.site_address_line1}
						{...$constraints.site_address_line1}
					/></Label
				>
				{#if $errors.site_address_line1}<span class="invalid">{$errors.site_address_line1}</span
					>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="site_suburb"
					>Suburb
					<Input
						type="text"
						name="site_suburb"
						placeholder="Suburb"
						aria-invalid={$errors.site_suburb ? 'true' : undefined}
						bind:value={$form.site_suburb}
						{...$constraints.site_suburb}
					/></Label
				>
				{#if $errors.site_suburb}<span class="invalid">{$errors.site_suburb}</span>{/if}
			</div>
			<div class="mb-6">
				<Label class="mb-2" for="site_state"
					>State
					<Select name="site_state" bind:value={$form.site_state}>
						{#each states as state}
							<option value={state}>{state}</option>
						{/each}
					</Select>
				</Label>

				{#if $errors.site_state}<p>{$errors.site_state}</p>{/if}
			</div>

			<div class="mb-6">
				<Label class="mb-2" for="site_postcode"
					>Postcode
					<Input
						placeholder="Postcode"
						type="text"
						name="site_postcode"
						aria-invalid={$errors.site_postcode ? 'true' : undefined}
						bind:value={$form.site_postcode}
						{...$constraints.site_postcode}
					/></Label
				>
				{#if $errors.site_postcode}<span class="invalid">{$errors.site_postcode}</span>{/if}

				<Label class="mb-2" for="site_country"
					>Country
					<Input
						placeholder="Country"
						type="text"
						name="site_country"
						aria-invalid={$errors.site_country ? 'true' : undefined}
						bind:value={$form.site_country}
						{...$constraints.site_country}
					/></Label
				>
				{#if $errors.site_country}<span class="invalid">{$errors.site_country}</span>{/if}
			</div>
		</div>

		<div class="p-8">
			<div class="mb-6">
				<Label class="mb-2" for="quote_description"
					>Description
					<Textarea
						type="text"
						name="quote_description"
						placeholder="Description"
						rows="4"
						aria-invalid={$errors.quote_description ? 'true' : undefined}
						bind:value={$form.quote_description}
						{...$constraints.quote_description}
					/></Label
				>
				{#if $errors.quote_description}<span class="invalid">{$errors.quote_description}</span>{/if}
			</div>
		</div>

		<Button>Submit</Button>
	</form>
</div>

<style>
	.invalid {
		color: red;
	}
</style>
