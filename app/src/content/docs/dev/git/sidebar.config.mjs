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
		label: 'Git Guides',
		collapsed: false,
		items: [
			{
				label: 'Git Guides',
				slug: 'dev/git',
			},
			{
				label: 'Git cherry-pick',
				slug: 'dev/git/cherry-pick',
			},
		],
	},
]

export default sidebar
