<script lang="ts">
	import GoogleImitationTitle from "./search/GoogleImitationTitle.svelte";
	import GoogleBannerImitation from "./search/GoogleBannerImitation.svelte";
	import SearchSection from "./search/SearchSection.svelte";
	import type { GameMetadata } from "$lib/core/game";

	let titleHovered = false;
	let searchResults: GameMetadata[];
</script>

<div class="flex justify-center mb-7 -m-8">
	<h1
		class="text-[100px] font-bold"
		on:mouseenter={() => {
			titleHovered = true;
		}}
		on:mouseleave={() => {
			titleHovered = false;
		}}
	>
		{#if titleHovered}
			<span class="gradient-text text-3xl">yes i know im imitating google shut up</span>
		{:else}
			<GoogleImitationTitle />
		{/if}
	</h1>
</div>
<GoogleBannerImitation {searchResults} />
<SearchSection bind:searchResults />
