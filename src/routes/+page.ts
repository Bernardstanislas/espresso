import { supabase } from '../lib';

export async function load() {
	const shots = await supabase.from('shots').select().order('created_at', { ascending: false });
	return { shots: shots.data };
}
