import { sidebarLinks } from '~/content/docs/sidebar.config.mjs'

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
		label: 'Windows Guides',
		collapsed: false,
		items: [
			{
				label: 'Windows',
				slug: 'system/windows',
			},
			{
				label: 'Install Windows',
				slug: 'system/windows/install',
			},
			{
				label: 'Apps & files in Windows',
				slug: 'system/windows/files',
			},
			{
				label: 'DNS in Windows',
				slug: 'system/windows/dns',
			},
		],
	},
]

export default sidebar
