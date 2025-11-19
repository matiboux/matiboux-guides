import { sidebarLinks } from '../../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	{
		label: '← System Guides',
		slug: 'system',
	},
	{
		label: 'Linux Guides',
		collapsed: false,
		items: [
			{
				label: 'Linux',
				slug: 'system/linux',
			},
			{
				label: 'Trim whitespaces in files',
				slug: 'system/linux/trim-whitespaces',
			},
		],
	},
]

export default sidebar
