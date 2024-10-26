<script lang="ts">
import { chromaServerUrlStore } from './chroma-server-url.store'
import { authTokenStore } from './auth-token.store'
import { inputCollectionNameStore } from './input-collection-name.store'

// Generate random id
const id = Math.random().toString(36).substring(2)
</script>

<pre data-language="sh">
curl -X POST -v \
  <code>{$chromaServerUrlStore || 'https://chromadb.example.com'}</code>/api/v1/collections \
  -H "Authorization: Bearer <code>{$authTokenStore || '{AUTH_TOKEN}'}</code>" \
  -H "Content-Type: application/json" \
  -d '{'{'}
    "name": "<code>{$inputCollectionNameStore || '{COLLECTION_NAME}'}</code>",
    "metadata": {'{'}
      "hnsw:space": "cosine"
	{'}'},
    "get_or_create": true
  {'}'}'
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
