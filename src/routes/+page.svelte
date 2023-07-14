<script lang="ts">
	import { formatRelative } from 'date-fns';

	export let data;
</script>

<ul class="divide-y divide-slate-100">
	{#each data?.shots || [] as shot}
		<li>
			{formatRelative(new Date(shot.created_at), new Date())}
		</li>
	{/each}
</ul>
