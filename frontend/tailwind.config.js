/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Vazir: 'Vazir',
				Lalezar: 'Lalezar'
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem'
				}
			},
			boxShadow: {
				box: '0 0 20px rgba(234, 179, 8, 0.5)',
				product: '0 0 10px rgba(234, 179, 8, 0.5)'
			},
			colors: {
				LightYellow: '#FFC01E',
				DarkYellow: '#FCA921',
				Dark: '#0A0706',
				Light: '#FCFCFC',
				Info: '#82A0B2'
			}
		}
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		}
	]
};
