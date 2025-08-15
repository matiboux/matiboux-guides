import { sidebarLinks } from '../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	{
		label: 'Dev Guides',
		collapsed: false,
		items: [
			{
				label: 'Dev Guides',
				slug: 'dev',
			},
			{
				label: 'ChromaDB API →',
				slug: 'dev/chromadb/api',
			},
			{
				label: 'Docker Compose →',
				slug: 'dev/docker/compose',
			},
			{
				label: 'GitHub Guides →',
				slug: 'dev/github',
			},
			{
				label: 'Development Tools',
				slug: 'dev/tools',
			},
		],
	},
]

export default sidebar
