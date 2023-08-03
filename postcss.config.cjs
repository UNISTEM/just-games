const config = {
	plugins: [
		require("postcss-custom-properties"),
		require("tailwindcss/nesting")("postcss-nesting"),
		require("tailwindcss"),
		require("autoprefixer")
	]
};

module.exports = config;
