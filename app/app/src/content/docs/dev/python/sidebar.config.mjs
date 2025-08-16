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
		label: 'Python Guides',
		collapsed: false,
		items: [
			{
				label: 'Python Guides',
				slug: 'dev/python',
			},
		],
	},
]

export default sidebar
