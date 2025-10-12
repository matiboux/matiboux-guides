/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
export const sidebarLinks = [
	{
		label: '👤 Matiboux.me',
		link: 'https://matiboux.me',
		attrs: {
			target: '_blank',
		},
	},
	{
		label: '💻 Github @matiboux',
		link: 'https://github.com/matiboux',
		attrs: {
			target: '_blank',
		},
	},
	{
		label: '📂 Matiboux Docs',
		link: 'https://docs.matiboux.com',
		attrs: {
			target: '_blank',
		},
	},
]

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: 'Home',
		slug: 'index',
	},
	{
		label: 'Dev Guides →',
		slug: 'dev',
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
