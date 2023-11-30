<script lang="ts">
	// import RoomListContainer from '../lib/components/RoomListContainer.svelte';
	import DetailsForm from '../lib/components/DetailsForm.svelte';
	import { Card, Input, Checkbox, Label, Textarea, Select, Helper, Button } from 'flowbite-svelte';
	// import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { Section } from 'flowbite-svelte-blocks';
	export let data;

	const { form, errors, constraints } = superForm(data.form);

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
<div class="md:flex md:items-center md:justify-around md:p-6">
	<Card size="xl">
		<div class="flex flex-col space-y-6">
			<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Customer Details</h3>
		</div>
		<div class="flex flex-col space-y-6">
			<form method="POST" class="grid md:grid-cols-2 gap-4">
				<div class="flex flex-col col-span-2 space-y-6 mb-5">
					<div class="grid gap-4">
						<div class="grid md:grid-cols-2 gap-4">
							<div>
								<Label
									>First Name
									<Input
										type="text"
										name="first_name"
										placeholder="First Name"
										aria-invalid={$errors.first_name ? 'true' : undefined}
										bind:value={$form.first_name}
										{...$constraints.first_name}
									/>
								</Label>
								{#if $errors.first_name}<span class="invalid">{$errors.first_name}</span>{/if}
							</div>

							<div>
								<Label for="last_name"
									>Last Name
									<Input
										type="text"
										name="last_name"
										placeholder="Last Name"
										aria-invalid={$errors.last_name ? 'true' : undefined}
										bind:value={$form.last_name}
										{...$constraints.last_name}
									/>
								</Label>
								{#if $errors.last_name}<span class="invalid">{$errors.last_name}</span>{/if}
							</div>

							<div>
								<Label for="phone"
									>Phone
									<Input
										type="text"
										name="phone"
										placeholder="Phone"
										aria-invalid={$errors.phone ? 'true' : undefined}
										bind:value={$form.phone}
										{...$constraints.phone}
									/>
								</Label>
								{#if $errors.phone}<span class="invalid">{$errors.phone}</span>{/if}
							</div>

							<div>
								<Label for="email"
									>E-mail
									<Input
										type="email"
										name="email"
										placeholder="Email"
										aria-invalid={$errors.email ? 'true' : undefined}
										bind:value={$form.email}
										{...$constraints.email}
									/>
								</Label>
								{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
							</div>
						</div>
					</div>
				</div>

				<div class="flex flex-col space-y-6">
					<h5 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">
						Customer Address
					</h5>

					<div class="grid gap-4">
						<div class="col-span-2">
							<Label for="address_line1"
								>Address
								<Input
									type="text"
									name="address_line1"
									placeholder="Address"
									aria-invalid={$errors.address_line1 ? 'true' : undefined}
									bind:value={$form.address_line1}
									{...$constraints.address_line1}
								/>
							</Label>
							{#if $errors.address_line1}<span class="invalid">{$errors.address_line1}</span>{/if}
						</div>

						<div>
							<Label for="suburb"
								>Suburb
								<Input
									type="text"
									name="suburb"
									placeholder="Suburb"
									aria-invalid={$errors.suburb ? 'true' : undefined}
									bind:value={$form.suburb}
									{...$constraints.suburb}
								/>
							</Label>
							{#if $errors.suburb}<span class="invalid">{$errors.suburb}</span>{/if}
						</div>

						<div>
							<Label for="state"
								>State
								<Select name="state" bind:value={$form.state} placeholder="State">
									{#each states as state}
										<option value={state}>{state}</option>
									{/each}
								</Select>
							</Label>
							{#if $errors.state}<p>{$errors.state}</p>{/if}
						</div>

						<div>
							<Label for="postcode"
								>Postcode
								<Input
									type="text"
									name="postcode"
									placeholder="Postcode"
									aria-invalid={$errors.postcode ? 'true' : undefined}
									bind:value={$form.postcode}
									{...$constraints.postcode}
								/>
							</Label>
							{#if $errors.postcode}<span class="invalid">{$errors.postcode}</span>{/if}
						</div>

						<div>
							<Label for="country"
								>Country
								<Input
									type="text"
									name="country"
									placeholder="Country"
									aria-invalid={$errors.country ? 'true' : undefined}
									bind:value={$form.country}
									{...$constraints.country}
								/>
							</Label>
							{#if $errors.country}<span class="invalid">{$errors.country}</span>{/if}
						</div>
					</div>
				</div>

				<div class="flex flex-col space-y-6">
					<div class="flex justify-between items-center">
						<h5 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">
							Site Address
						</h5>

						<Checkbox bind:checked={sameAddress} on:change={copyAddress}>
							Same as customer address</Checkbox
						>
					</div>

					<div class="grid md:grid-cols-2 gap-4">
						<div class="col-span-2">
							<Label for="site_address_line1"
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
							{#if $errors.site_address_line1}<span class="invalid"
									>{$errors.site_address_line1}</span
								>{/if}
						</div>

						<div>
							<Label for="site_suburb"
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

						<div>
							<Label for="site_state"
								>State
								<Select name="site_state" bind:value={$form.site_state} placeholder="State">
									{#each states as state}
										<option value={state}>{state}</option>
									{/each}
								</Select>
							</Label>

							{#if $errors.site_state}<p>{$errors.site_state}</p>{/if}
						</div>

						<div>
							<Label for="site_postcode"
								>Postcode
								<Input
									type="text"
									name="site_postcode"
									placeholder="Postcode"
									aria-invalid={$errors.site_postcode ? 'true' : undefined}
									bind:value={$form.site_postcode}
									{...$constraints.site_postcode}
								/></Label
							>
							{#if $errors.site_postcode}<span class="invalid">{$errors.site_postcode}</span>{/if}
						</div>

						<div>
							<Label for="site_country"
								>Country
								<Input
									type="text"
									name="site_country"
									placeholder="Country"
									aria-invalid={$errors.site_country ? 'true' : undefined}
									bind:value={$form.site_country}
									{...$constraints.site_country}
								/></Label
							>
							{#if $errors.site_country}<span class="invalid">{$errors.site_country}</span>{/if}
						</div>
					</div>
				</div>

				<div class="flex flex-col sm:col-span-2 space-y-6">
					<Label for="quote_description"
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
					{#if $errors.quote_description}<span class="invalid">{$errors.quote_description}</span
						>{/if}
				</div>

				<button
					class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg w-32"
					>Submit</button
				>
			</form>
		</div>
	</Card>

	<Card padding="xl" size="md">
		<div class="flex justify-between items-center mb-4">
			<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Summary</h5>
			<p class="text-sm font-medium text-primary-600 dark:text-primary-500">Quote Status</p>
		</div>
		<ul class="my-7 space-y-4">
			<li class="flex space-x-2">
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
					Quote ID:
				</span>
			</li>
			<li class="flex space-x-2">
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
					Quote Amount:
				</span>
			</li>
			<li class="flex space-x-2">
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
					Quote Date:
				</span>
			</li>
			<li class="flex space-x-2">
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
					Expiry Date:
				</span>
			</li>
		</ul>
		<div class="justify-center items-center mb-4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
			<Button class="w-full">Preview Quote</Button>
		</div>
		<div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
			<Button>Print Quote</Button>
			<Button>Send Quote</Button>
			<Button>Copy Quote</Button>
		</div></Card
	>
</div>

<style>
	.invalid {
		color: red;
	}
</style>
