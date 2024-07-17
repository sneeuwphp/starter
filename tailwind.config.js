/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,ski}"],
	theme: {
		extend: {
			colors: {
				iceberg: {
					50: "#f0fbf9",
					100: "#d7f5f1",
					200: "#b5ece6",
					300: "#82ded5",
					400: "#48c8bd",
					500: "#2dada3",
					600: "#28928f",
					700: "#267878",
					800: "#276263",
					900: "#245255",
					950: "#133639",
				},
			},
		},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
		},
	},
};
