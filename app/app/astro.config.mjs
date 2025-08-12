import { defineConfig, envField } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	trailingSlash: 'always',
	integrations: [
		svelte(),
		starlight({
			title: 'Matiboux Guides',
			// description: 'Documentation website with Starlight',
			editLink: {
				baseUrl: 'https://github.com/matiboux/matiboux-guides/edit/main/app/app/',
			},
			sidebar: [
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
			],
			social: {
				github: 'https://github.com/matiboux/matiboux-guides',
			},
			customCss: [
				'./src/styles/global.css',
			],
			lastUpdated: true,
			pagination: false,
			components: {
				SiteTitle: '~/components/overrides/SiteTitle.astro',
				SocialIcons: '~/components/overrides/SocialIcons.astro',
				Sidebar: '~/components/overrides/Sidebar.astro',
				Banner: '~/components/overrides/Banner.astro',
				Footer: '~/components/overrides/Footer.astro',
			},
		}),
	],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	env: {
		schema: {
// Deployment configuration
			GITHUB_REPOSITORY_URL: envField.string({ context: 'client', access: 'public', optional: true }),
			GITHUB_SHA: envField.string({ context: 'client', access: 'public', optional: true }),
VERSION_TAG: envField.string({ context: 'client', access: 'public', optional: true }),
			// Application configuration
			// Add env vars for your application here.
		},
		validateSecrets: true,
	},
})
