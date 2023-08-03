<script lang="ts">
	import { palette } from "$lib/palette";
	export let anchor: string;
	export let text: string;
	export let hoverColor: string;

	const colorVariants: Record<string, string> = {
		blue: `hover:bg-gradient-to-r from-[#9FB4FF]`,
		mint: `hover:bg-gradient-to-r from-[#99FFCD]`,
		yellow: `hover:bg-gradient-to-r from-[#FFF56D]`,
		orange: `hover:bg-gradient-to-r from-[#FFD36E]`,
		login: "hover:bg-gradient-to-r from-[#9FB4FF] to-[#99FFCD]",
		signup: "hover:bg-gradient-to-r from-[#FFF56D] to-[#FFD36E]"
	};
</script>

<button class={colorVariants[hoverColor]}><a class="no-underline" href={anchor}>{text}</a></button>
