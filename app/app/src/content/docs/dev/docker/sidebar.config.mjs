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
		label: 'Docker Guides',
		collapsed: false,
		items: [
			{
				label: 'Docker Compose',
				slug: 'dev/docker/compose',
			},
			{
				label: 'Networks in Docker',
				slug: 'dev/docker/networks',
			},
		],
	},
]

export default sidebar
