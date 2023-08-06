<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	export let link: string;
	export let text: string;

	function urlMatchesAnchor(): boolean {
		let pathname = $page.url.pathname;
		return link === "/" ? pathname === "/" : pathname.startsWith(link);
	}

	let anchorClass = urlMatchesAnchor() ? "gradient-text" : "";
	let buttonClass = urlMatchesAnchor() ? "hover:bg-black hover:border-white" : "";

	function updateHtmlClasses() {
		anchorClass = urlMatchesAnchor() ? "gradient-text" : "";
		buttonClass = urlMatchesAnchor() ? "hover:bg-black hover:border-white" : "";
	}

	afterNavigate(() => updateHtmlClasses());
	onMount(updateHtmlClasses);
</script>

<button class={buttonClass}><a class={`no-underline ${anchorClass}`} href={link}>{text}</a></button>
