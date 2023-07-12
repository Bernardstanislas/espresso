<script lang="ts">
  import {supabase} from "../lib"

  const entriesPromise =  supabase.from("entries").select();

  const handleSumbit = (event) => {
      const formData = new FormData(event.target)
      console.log(formData)
      console.log(formData.get("quantity-in"))
    }
</script>
<form on:submit|preventDefault={handleSumbit}>
  <div>
  <label>
  Quantity in
  <input name="quantity-in" type="number" />
  </label>
  </div>
  <div>
  <label>
  Quantity out
  <input name="quantity-out" type="number" />
  </label>
  </div>
  <div>
  <label>
  Grain
  <input name="grain" type="number" />
  </label>
  </div>
  <div>
  <label>
  Extraction
  <select name="good-extraction">
    <option value="true">OK</option>
    <option value="false">KO</option>
  </select>
  </label>
  <label>
  Puck
  <select name="good-puck">
    <option value="true">OK</option>
    <option value="false">KO</option>
  </select>
  </label>
  </div>
  <div>
  <label>
  Observation
  <textarea name="observation"></textarea>
  </label>
  </div>
  <button type="submit">Save</button>
</form>
{#await entriesPromise then data}
<ul>
{#each data.data as row}
<li>{row.content}</li>
{/each}
</ul>
{/await}
