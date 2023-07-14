import { supabase } from '../lib';

export async function load() {
	const entries = await supabase.from('entries').select();
	return { entries: entries.data };
}
