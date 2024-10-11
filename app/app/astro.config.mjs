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
			components: {
				SiteTitle: '~/components/overrides/SiteTitle.astro',
			},
			customCss: [
				'./src/tailwind.css',
			],
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
			],
			pagination: false,
		}),
		tailwind({
			applyBaseStyles: false, // Disable default base styles
		}),
	],
	trailingSlash: 'never',
})
