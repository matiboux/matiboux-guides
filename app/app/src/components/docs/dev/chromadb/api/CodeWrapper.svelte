<script lang="ts">
import { chromaServerUrlStore } from './chroma-server-url.store'
import { sanitizeChromaServerUrl } from './sanitize-chroma-server-url'
import { authTokenStore } from './auth-token.store'
import { inputCollectionNameStore } from './input-collection-name.store'
import { inputCollectionIdStore } from './input-collection-id.store'
import { inputTargetCollectionIdStore } from './input-target-collection-id.store'

// Props
let replaceServerUrl: boolean = false
let replaceAuthToken: boolean = false
let replaceCollectionName: boolean = false
let replaceCollectionId: boolean = false
let replaceTargetCollectionId: boolean = false
export {
	replaceServerUrl,
	replaceAuthToken,
	replaceCollectionName,
	replaceCollectionId,
	replaceTargetCollectionId,
}

let wrapper: HTMLDivElement
let originalWrapperHtml: string | null = null

$: {
	if (wrapper)
	{
		if (!originalWrapperHtml)
		{
			originalWrapperHtml = wrapper.innerHTML
		}

		let updatedHtml = originalWrapperHtml

		if (replaceServerUrl)
		{
			// Replace ChromaDB server URL
			updatedHtml = updatedHtml.replaceAll(
				'{SERVER_URL}',
				sanitizeChromaServerUrl($chromaServerUrlStore) || 'https://chromadb.example.com',
			)
		}

		if (replaceAuthToken)
		{
			// Replace auth token
			updatedHtml = updatedHtml.replaceAll(
				'{AUTH_TOKEN}',
				$authTokenStore || '{AUTH_TOKEN}',
			)
		}

		if (replaceCollectionName)
		{
			// Replace collection name
			updatedHtml = updatedHtml.replaceAll(
				'{COLLECTION_NAME}',
				$inputCollectionNameStore || '{COLLECTION_NAME}',
			)
		}

		if (replaceCollectionId)
		{
			// Replace collection ID
			updatedHtml = updatedHtml.replaceAll(
				'{COLLECTION_ID}',
				$inputCollectionIdStore || '{COLLECTION_ID}',
			)
		}

		if (replaceTargetCollectionId)
		{
			// Replace target collection ID
			updatedHtml = updatedHtml.replaceAll(
				'{TARGET_COLLECTION_ID}',
				$inputTargetCollectionIdStore || '{TARGET_COLLECTION_ID}',
			)
		}

		// Update wrapper html
		wrapper.innerHTML = updatedHtml
	}
}
</script>

<div class="wrapper" bind:this={wrapper}>
	<slot />
</div>

<style lang="scss">
.wrapper {
	margin-top: 1rem;
}
</style>
