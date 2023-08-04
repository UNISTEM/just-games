<script lang="ts">
	export let anchor: string;
	export let text: string;
	export let hoverColor: string;

	const colorVariants: Record<string, string> = {
		red: `hover:bg-gradient-to-r from-[#FF6663]`,
		blue: `hover:bg-gradient-to-r from-[#9EC1CF]`,
		yellow: `hover:bg-gradient-to-r from-[#FDFD97]`,
		green: `hover:bg-gradient-to-r from-[#9EE09E]`,
		login: "hover:bg-gradient-to-r from-[#FF6663] to-[#FDFD97] via-[#FEB144]",
		signup: "hover:bg-gradient-to-r from-[#9EC1CF] to-[#CC99C9] via-[#9EE09E]"
	};
</script>

<button class={colorVariants[hoverColor]}><a class="no-underline" href={anchor}>{text}</a></button>

<style>
	button:hover {
		box-shadow: 7px 7px #ffffff;
	}
</style>
