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
		label: 'GitHub Guides',
		collapsed: false,
		items: [
			{
				label: 'GitHub Guides',
				slug: 'dev/github',
			},
			{
				label: 'GitHub repositories',
				slug: 'dev/github/repo',
			},
		],
	},
]

export default sidebar
