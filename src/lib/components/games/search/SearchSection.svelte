<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";
	import SearchBar from "./SearchBar.svelte";
	import SearchResults from "./SearchResults.svelte";

	let searchTerm = "";
	export let searchResults: GameMetadata[];
</script>

<SearchBar bind:searchTerm />
<SearchResults bind:searchTerm bind:searchResults />
