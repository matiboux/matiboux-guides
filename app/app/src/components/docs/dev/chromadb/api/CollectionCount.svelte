<script lang="ts">
import { inputCollectionIdStore } from './input-collection-id.store'
import { authTokenStore } from './auth-token.store'

// Generate random id
const id = Math.random().toString(36).substring(2)
</script>

<pre data-language="sh">
curl -X GET -v \
  https://chromadb.example.com/api/v1/collections/<code>{$inputCollectionIdStore || '{COLLECTION_ID}'}</code>/count \
  -H "Authorization: Bearer <code>{$authTokenStore || '{AUTH_TOKEN}'}</code>"
</pre>

<style lang="scss">
	pre {
		width: 100%;
		margin-top: 1rem;

		code {
			background-color: var(--sl-color-bg-inline-code);
			margin-block: -0.125rem;
			padding: 0.125rem 0.25rem;
			font-size: var(--sl-text-code-sm);
		}
	}
</style>
