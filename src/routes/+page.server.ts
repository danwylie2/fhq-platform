import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

// const customerSchema = z.object({
// 	first_name: z.string().default('Phillip!'),
// 	last_name: z.string().default('Browne'),
// 	address_line1: z.string().default('5 High Road'),
// 	suburb: z.string().default('Camberwell'),
// 	state: z.string(),
// 	postcode: z.string().default('3124'),
// 	country: z.string().default('Australia'),
// 	phone: z.string().min(8).max(15).default('0403734188'),
// 	email: z.string().email().default('phillip@browne.com')
// });

// const siteSchema = z.object({
// 	useSameAddress: z.boolean(),
// 	siteAddress: customerSchema.omit({ email }),
// });

// const schema = z.object({
// 	customer: customerSchema,
// 	site: siteSchema,
// });

const schema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	address_line1: z.string(),
	suburb: z.string(),
	state: z.string(),
	postcode: z.string(),
	country: z.string(),
	phone: z.string().min(8).max(15),
	email: z.string().email(),

	site_address_line1: z.string(),
	site_suburb: z.string(),
	site_state: z.string(),
	site_postcode: z.string(),
	site_country: z.string(),
	quote_description: z.string()
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data

		return { form };
	}
};
