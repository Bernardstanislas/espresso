import { supabase } from '$lib';

export async function load() {
	const latestShot = await supabase
		.from('shots')
		.select('created_at, quantity_in, quantity_out, grind_size')
		.order('created_at', { ascending: false })
		.limit(1);

	if (latestShot.count === 0 || latestShot.data === null) {
		return;
	}

	return {
		latestShot: latestShot.data[0]
	};
}
