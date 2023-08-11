<script lang="ts">
	import GoogleImitationTitle from "./GoogleImitationTitle.svelte";
	import GoogleBannerImitation from "./GoogleBannerImitation.svelte";
	import SearchResults from "./search/SearchResults.svelte";
	import type { GameMetadata } from "$lib/core/game";
	import SearchBar from "./search/SearchBar.svelte";

	let searchResults: GameMetadata[];
	let searchTerm = "";
</script>

<GoogleImitationTitle />
<GoogleBannerImitation {searchResults} />
<SearchBar bind:searchTerm />
<SearchResults bind:searchTerm bind:searchResults />
