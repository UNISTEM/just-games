<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import "../app.postcss";
	import LinksFooter from "$lib/components/LinksFooter.svelte";
</script>

<NavBar />
<slot />
<LinksFooter />
