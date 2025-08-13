/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
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
	{
		label: 'Home',
		link: '/',
	},
	{
		label: 'Dev',
		collapsed: false,
		items: [
			{
				label: 'ChromaDB',
				collapsed: true,
				autogenerate: { directory: 'dev/chromadb', collapsed: true },
			},
			{
				label: 'Docker',
				collapsed: true,
				autogenerate: { directory: 'dev/docker', collapsed: true },
			},
			{
				label: 'GitHub',
				collapsed: true,
				autogenerate: { directory: 'dev/github', collapsed: true },
			},
			{
				slug: 'dev',
			},
			{
				slug: 'dev/tools',
			},
		],
	},
	{
		label: 'System',
		collapsed: false,
		items: [
			{
				label: 'Windows',
				collapsed: true,
				autogenerate: { directory: 'system/windows', collapsed: true },
			},
			{
				label: 'WSL',
				collapsed: true,
				autogenerate: { directory: 'system/wsl', collapsed: true },
			},
		],
	},
]

export default sidebar
