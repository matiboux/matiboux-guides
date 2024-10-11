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
		}),
		tailwind({
			applyBaseStyles: false, // Disable default base styles
		}),
	],
	trailingSlash: 'never',
})
