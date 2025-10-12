import { sidebarLinks } from '../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	{
		label: 'System Guides',
		collapsed: false,
		items: [
			{
				label: 'Windows Guides →',
				slug: 'system/windows',
			},
			{
				label: 'WSL Guides →',
				slug: 'system/wsl',
			},
		],
	},
]

export default sidebar
