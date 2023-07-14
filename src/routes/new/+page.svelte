<script lang="ts">
	import { supabase } from '../../lib';

	const handleSumbit = (event: SubmitEvent) => {
		const formData = new FormData(event.target);
		supabase.from('entries').insert({
			quantity_in: formData.get('quantity_in'),
			quantity_out: formData.get('quantity_out'),
			grind_size: formData.get('grind_size'),
			extraction: formData.get('extraction'),
			puck: formData.get('puck'),
			grade: formData.get('grade'),
			observation: formData.get('observation'),
			duration: formData.get('duration')
		});
	};
</script>

<form on:submit|preventDefault={handleSumbit}>
	<div>
		<label>
			Quantity in
			<input name="quantity_in" type="number" />
		</label>
	</div>
	<div>
		<label>
			Quantity out
			<input name="quantity_out" type="number" />
		</label>
		<label>
			Duration
			<input name="duration" type="number" />
		</label>
	</div>
	<div>
		<label>
			Grind size
			<input name="grind_size" type="number" />
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
