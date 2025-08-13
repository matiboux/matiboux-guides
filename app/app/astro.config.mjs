import { defineConfig, envField } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: process.env.ASTRO_SITE_URL || undefined,
	base: process.env.ASTRO_BASE_PATH || undefined,
	build: {
		assetsPrefix: process.env.ASTRO_ASSETS_PREFIX || undefined,
	},
	trailingSlash: 'always',
	integrations: [
		svelte(),
		starlight({
			title: 'Matiboux Guides',
			// description: 'Documentation website with Starlight',
			editLink: {
				baseUrl: 'https://github.com/matiboux/matiboux-guides/edit/main/app/app/',
			},
			// Sidebar is overridden in this project
			// Set config to empty here to avoid useless computation
			sidebar: [],
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/matiboux/matiboux-guides' },
			],
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
