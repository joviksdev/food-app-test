/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// primary: '#32435F',
				// ['primary-light']: '#5b79ab',
				['primary']: '#a028f0',
				['primary-light']: 'rgb(160, 40, 240, 0.4)',
			},
		},
	},
	plugins: [],
};
