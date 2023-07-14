<script lang="ts">
	export let data;
</script>

<ul>
	{#each data?.entries || [] as row}
		<li>{row.created_at}</li>
	{/each}
</ul>
