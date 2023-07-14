<script lang="ts">
	import { supabase } from '../lib';

	let entriesPromise = supabase.from('entries').select();
</script>

{#await entriesPromise then data}
	<ul>
		{#each data.data as row}
			<li>{row.created_at}</li>
		{/each}
	</ul>
{/await}
