<script lang="ts">
  import {supabase} from "../lib"

  const entriesPromise =  supabase.from("entries").select();
console.log(entriesPromise)

</script>
{#await entriesPromise then data}
<ul>
{#each data.data as row}
<li>{row.content}</li>
{/each}
</ul>
{/await}
