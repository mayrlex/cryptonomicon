import taiwindForms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js}'],
	theme: {
		extend: {},
	},
	plugins: [taiwindForms],
};
