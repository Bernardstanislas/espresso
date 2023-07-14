import { supabase } from '$lib';

export async function load() {
	const latestEntry = await supabase
		.from('entries')
		.select('created_at, quantity_in, quantity_out, grind_size')
		.order('created_at', { ascending: false })
		.limit(1);

	if (latestEntry.count === 0 || latestEntry.data === null) {
		return;
	}

	return {
		latestEntry: latestEntry.data[0]
	};
}
