import { supabase } from '$lib';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		await supabase.from('entries').insert({
			quantity_in: data.get('quantity_in'),
			quantity_out: data.get('quantity_out'),
			grind_size: data.get('grind_size'),
			extraction: data.get('extraction'),
			puck: data.get('puck'),
			grade: data.get('grade'),
			observation: data.get('observation'),
			duration: data.get('duration')
		});

		throw redirect(303, '/');
	}
};
