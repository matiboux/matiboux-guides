import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		starlight({
			title: 'Matiboux Guides',
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
							slug: 'dev/tools',
						},
					],
				},
				{
					label: 'System',
					collapsed: false,
					items: [
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
				'./src/tailwind.css',
			],
			pagination: false,
			components: {
				SocialIcons: '~/components/overrides/SocialIcons.astro',
				SiteTitle: '~/components/overrides/SiteTitle.astro',
				Banner: '~/components/overrides/Banner.astro',
			},
		}),
		tailwind({
			applyBaseStyles: false, // Disable default base styles
		}),
	],
	trailingSlash: 'never',
})
