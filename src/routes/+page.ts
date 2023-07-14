import { supabase } from '../lib';

export async function load() {
	const shots = await supabase.from('shots').select();
	return { shots: shots.data };
}
