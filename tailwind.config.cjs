/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			red: "#FF6663",
			orange: "#FEB144",
			yellow: "#FDFD97",
			green: "#9EE09E",
			blue: "#9EC1CF",
			violet: "#CC99C9",
			white: "white",
			transparent: "transparent",
			black: "black"
		}
	},

	plugins: []
};

module.exports = config;
