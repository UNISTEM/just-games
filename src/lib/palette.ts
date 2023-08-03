export const palette = {
	blue: "#9FB4FF",
	mint: "#99FFCD",
	yellow: "#FFF56D",
	orange: "#FFD36E"
};

/**
 * Gets a linear gradient consising of all the palette gradient, in CSS form.
 * To be used directly in the `background-image` CSS property.
 */
export function getPaletteGradient(): string {
	return `linear-gradient(to right ${palette.blue} ${palette.mint} ${palette.yellow}${palette.orange}) 0 0 / 200% 100%`;
}
