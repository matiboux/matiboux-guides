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

function replacePlaceholderInHtml(
	inputHtml: string,
	placeholder: string,
	replacement: string,
): string
{
	// Parse input html
	const inputDocument = (new DOMParser()).parseFromString(inputHtml, 'text/html')

	// Find span elements containing placeholder
	let xpath = `//span[text()[contains(., "${placeholder.replace(/"/g, '\\"')}")]]`
	let nodesSnapshot = document.evaluate(
		xpath, inputDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null,
	)

	for (let i = 0; i < nodesSnapshot.snapshotLength; i++)
	{
		// Get span element containing "{SERVER_URL}"
		const spanElement = nodesSnapshot.snapshotItem(i) as HTMLSpanElement
		const style = spanElement.getAttribute('style') || ''

		// Create new mark element
		const markNewElement = document.createElement('mark')
		const spanNewElement = document.createElement('span')
		spanNewElement.setAttribute('style', style)
		spanNewElement.innerHTML = replacement
		markNewElement.appendChild(spanNewElement)

		// Replace "{SERVER_URL}" text in span element with new mark element
		spanElement.innerHTML = spanElement.innerHTML.replace(
			placeholder,
			markNewElement.outerHTML,
		)
	}

	// Replace remaining occurrences of "{SERVER_URL}" in original html
	inputDocument.body.innerHTML = inputDocument.body.innerHTML.replace(
		placeholder,
		replacement,
	)

	// Return updated html
	return inputDocument.body.innerHTML
}

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
			updatedHtml = replacePlaceholderInHtml(
				updatedHtml,
				'{SERVER_URL}',
				sanitizeChromaServerUrl($chromaServerUrlStore) || 'https://chromadb.example.com',
			)

		}

		if (replaceAuthToken)
		{
			// Replace auth token
			updatedHtml = replacePlaceholderInHtml(
				updatedHtml,
				'{AUTH_TOKEN}',
				$authTokenStore || '{AUTH_TOKEN}',
			)
		}

		if (replaceCollectionName)
		{
			// Replace collection name
			updatedHtml = replacePlaceholderInHtml(
				updatedHtml,
				'{COLLECTION_NAME}',
				$inputCollectionNameStore || '{COLLECTION_NAME}',
			)
		}

		if (replaceCollectionId)
		{
			// Replace collection ID
			updatedHtml = replacePlaceholderInHtml(
				updatedHtml,
				'{COLLECTION_ID}',
				$inputCollectionIdStore || '{COLLECTION_ID}',
			)
		}

		if (replaceTargetCollectionId)
		{
			// Replace target collection ID
			updatedHtml = replacePlaceholderInHtml(
				updatedHtml,
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
