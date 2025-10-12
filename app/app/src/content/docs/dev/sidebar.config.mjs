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
				label: 'Docker →',
				slug: 'dev/docker',
			},
			{
				label: 'Git Guides →',
				slug: 'dev/git',
			},
			{
				label: 'GitHub Guides →',
				slug: 'dev/github',
			},
			{
				label: 'Python Guides →',
				slug: 'dev/python',
			},
			{
				label: 'Development Tools',
				slug: 'dev/tools',
			},
		],
	},
]

export default sidebar
