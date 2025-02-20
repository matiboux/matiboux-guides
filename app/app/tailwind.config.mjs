import starlightPlugin from '@astrojs/starlight-tailwind'

// Generated 'Ocean' color palettes
// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
const accent = { 200: '#92d1fe', 600: '#005580', 900: '#003653', 950: '#00273d' };
const gray = { 100: '#f3f7f9', 200: '#e7eff2', 300: '#bac4c8', 400: '#7b8f96', 500: '#495c62', 700: '#2a3b41', 800: '#182a2f', 900: '#121a1c' };

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: { accent, gray },
		},
		screens: {
			md: '50rem',
			lg: '72rem',
		},
	},
	plugins: [
		starlightPlugin(),
	],
}
