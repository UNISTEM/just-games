<script lang="ts">
	export let anchor: string;
	export let text: string;
	export let tailwindHoverClass: string;
</script>

<button class={`hover:${tailwindHoverClass}`}><a href={anchor}>{text}</a></button>
