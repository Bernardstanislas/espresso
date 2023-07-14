<script lang="ts">
	import { formatRelative } from 'date-fns';

	export let data;
</script>

<ul class="divide-y divide-slate-100">
	{#each data?.shots || [] as shot}
		<li class="py-5">
			<h3 class="text-slate-500 text-sm">
				{formatRelative(new Date(shot.created_at), new Date())}
			</h3>
			<div class="flex items-center">
				<div class="text-2xl px-4">{shot.grade}</div>
				<div class="flex-grow space-y-2">
					<h2 class="">{shot.observation}</h2>
					<div class="text-sm text-slate-600 grid grid-cols-3 md:grid-cols-6 gap-2">
						<div>Qty in: {shot.quantity_in}g</div>
						<div>Qty out: {shot.quantity_out}g</div>
						<div>Duration: {shot.duration}s</div>
						<div>Grind size: {shot.grind_size}</div>
						<div>Extraction: {shot.extraction === 1 ? 'OK' : 'KO'}</div>
						<div>Puck: {shot.puck === 1 ? 'OK' : 'KO'}</div>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
