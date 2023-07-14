<script>
	import { enhance } from '$app/forms';
	export let data;
</script>

<form method="POST" use:enhance>
	<div>
		<label>
			Quantity in
			<input name="quantity_in" type="number" value={data.latestShot?.quantity_in} />
		</label>
	</div>
	<div>
		<label>
			Quantity out
			<input name="quantity_out" type="number" value={data.latestShot?.quantity_out} />
		</label>
		<label>
			Duration
			<input name="duration" type="number" />
		</label>
	</div>
	<div>
		<label>
			Grind size
			<input name="grind_size" type="number" value={data.latestShot?.grind_size} />
		</label>
	</div>
	<div>
		<label>
			Extraction
			<select name="extraction">
				<option value="1">OK</option>
				<option value="2">KO</option>
			</select>
		</label>
		<label>
			Puck
			<select name="puck">
				<option value="1">OK</option>
				<option value="2">KO</option>
			</select>
		</label>
	</div>
	<div>
		<label>
			Grade
			<input name="grade" type="number" />
		</label>
	</div>
	<div>
		<label>
			Observation
			<textarea name="observation" />
		</label>
	</div>
	<button type="submit">Save</button>
</form>
