import { sidebarLinks } from '../../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	{
		label: '← Dev Guides',
		slug: 'dev',
	},
	{
		label: 'ChromaDB Guides',
		collapsed: false,
		items: [
			{
				label: 'ChromaDB API',
				slug: 'dev/chromadb/api',
			},
			{
				label: 'ChromaDB Deployment',
				slug: 'dev/chromadb/deploy',
			},
		],
	},
]

export default sidebar
