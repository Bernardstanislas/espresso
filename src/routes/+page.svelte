<script lang="ts">
	export let data;
</script>

<ul>
	{#each data?.shots || [] as shot}
		<li>{shot.created_at}</li>
	{/each}
</ul>
