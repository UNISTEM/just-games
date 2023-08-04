<script lang="ts">
	export let anchor: string;
	export let text: string;
	export let hoverColor: string;

	const colorVariants: Record<string, string> = {
		red: `hover:bg-gradient-to-r from-red`,
		blue: `hover:bg-gradient-to-r from-blue`,
		yellow: `hover:bg-gradient-to-r from-yellow`,
		green: `hover:bg-gradient-to-r from-green`,
		login: "hover:bg-gradient-to-r from-red to-yellow via-orange",
		signup: "hover:bg-gradient-to-r from-blue to-violet via-green"
	};
</script>

<button class={colorVariants[hoverColor]}><a class="no-underline" href={anchor}>{text}</a></button>
