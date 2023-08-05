<script lang="ts">
	import { page } from "$app/stores";

	export let link: string;
	export let text: string;

	function urlMatchesAnchor(): boolean {
		let pathname = $page.url.pathname;
		return link === "/" ? pathname === "/" : pathname.startsWith(link);
	}

	const anchorClass = urlMatchesAnchor() ? "gradient-text" : "";
	const buttonClass = urlMatchesAnchor() ? "hover:bg-black hover:border-white" : "";
</script>

<button class={buttonClass}><a class={`no-underline ${anchorClass}`} href={link}>{text}</a></button>
