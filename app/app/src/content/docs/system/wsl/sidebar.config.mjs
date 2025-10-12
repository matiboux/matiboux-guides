import { sidebarLinks } from '../../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	// {
	// 	label: '← System Guides',
	// 	slug: 'system',
	// },
	{
		label: 'WSL Guides',
		collapsed: false,
		items: [
			{
				label: 'WSL',
				slug: 'system/wsl',
			},
			{
				label: 'Install WSL',
				slug: 'system/wsl/install',
			},
			{
				label: 'Manage WSL virtual disk',
				slug: 'system/wsl/vdisk',
			},
		],
	},
]

export default sidebar
