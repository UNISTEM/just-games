<script lang="ts">
	import { allGames, GameMetadata } from "$lib/core/game";
	import pluralize from "pluralize";
	import SearchResult from "./SearchResult.svelte";

	export let searchTerm: string;
	export let searchResults: GameMetadata[] = [];
	let searchTimeSeconds = 0;

	$: updateData(searchTerm);

	function updateData(searchTerm: string) {
		const startTime = performance.now();
		searchResults = allGames.filter((gameData) => gameData.getGameSearchName().includes(searchTerm));
		const endTime = performance.now();
		searchTimeSeconds = (endTime - startTime) / 1000;
	}
</script>

<div class="flex justify-center mt-5">
	<h3 class="font-semibold text-2xl mb-5">
		got <span class="gradient-text">{pluralize("result", searchResults.length, true)}</span>
		in <span class="gradient-text">{searchTimeSeconds.toFixed(2)}s</span>, which is, like,
		<span class="gradient-text">really fast</span>
	</h3>
</div>
<div class="grid grid-flow-row justify-center">
	{#each searchResults as searchResult}
		<SearchResult {searchResult} />
	{/each}
</div>
