<script lang="ts">
import { inputCollectionNameStore } from './input-collection-name.store'

// Props
let label: string | undefined = undefined
export {
	label,
}

// Generate random id
const id = Math.random().toString(36).substring(2)
</script>

<div class="input-group">
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	<input
		type="text"
		id={id}
		bind:value={$inputCollectionNameStore}
		placeholder="my_collection"
	/>
</div>

<style lang="scss">
	.input-group {
		width: 100%;
		margin-top: 1rem;

		label {
			display: block;
			padding-bottom: 0.25rem;
			font-size: 0.875rem;
			color: var(--sl-color-gray-600);
		}

		input {
			width: 100%;
			padding: 0.25rem 0.5rem;
			border: 1px solid var(--sl-color-hairline-light);
			border-radius: 0.25rem;
			outline-color: var(--sl-color-accent);
		}
	}
</style>
