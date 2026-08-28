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
			head: [
				{
					tag: 'script',
					attrs: {
						defer: true,
						src: 'https://u.mtbx.it/tw.js',
						'data-website-id': '64488905-e2e0-403f-bdad-2f1590be60f6',
					},
				},
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
			credits: false,
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
			APP_ENV: envField.enum({ context: 'client', access: 'public', optional: true, values: ['dev', 'test', 'prod'], default: 'prod' }),
			GITHUB_REPOSITORY_URL: envField.string({ context: 'client', access: 'public', optional: true }),
			GITHUB_SHA: envField.string({ context: 'client', access: 'public', optional: true }),
			VERSION_TAG: envField.string({ context: 'client', access: 'public', optional: true }),
			// Application configuration
			// Add env vars for your application here.
		},
		validateSecrets: true,
	},
})
