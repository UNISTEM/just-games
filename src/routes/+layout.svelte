<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import "../app.postcss";
	import LinksFooter from "$lib/components/Footer.svelte";
</script>

<NavBar />
<slot />
<hr class="mb-5 mt-20 pl-[450px] pr-[450px]" />
<LinksFooter />
<hr class="mt-5 pl-[450px] pr-[450px]" />
