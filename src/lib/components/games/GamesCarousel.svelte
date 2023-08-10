<script lang="ts">
	import lodash from "lodash";
	import { allGames } from "$lib/core/allGames";
	import CarouselGameItem from "./CarouselGameItem.svelte";
	import GameCarouselHelpText from "./GameCarouselHelpText.svelte";

	export let gameName: string | undefined = undefined;
	export let gameJpName: string | undefined = undefined;

	let currentPage = 0;

	function toNextPage() {
		if (allGames.length > (currentPage + 1) * 10) {
			currentPage++;
		}
	}

	function toPreviousPage() {
		if (currentPage > 0) {
			currentPage -= 1;
		}
	}
</script>

<hr />
<div class="games-carousel">
	{#each lodash.slice(allGames, currentPage * 10, currentPage * 10 + 10) as gameData}
		<CarouselGameItem {gameData} bind:gameName bind:gameJpName />
	{/each}
</div>
<br />
<div class="flex justify-center">
	<button class="page-nav-button gradient-text" on:click={toPreviousPage}>←</button>&nbsp;&nbsp;
	<span class="mt-[0.875rem]"><GameCarouselHelpText {gameName} {gameJpName} /></span>
	<button class="page-nav-button gradient-text" on:click={toNextPage}>→</button>
</div>
<hr />

<style>
	.games-carousel {
		padding-left: 42px;
		padding-right: 42px;
		display: grid;
		height: fit-content;
		grid-auto-flow: column;
		grid-auto-columns: 10%;
		overflow-x: auto;
		justify-content: center;
		overscroll-behavior-inline: contain;
	}

	.page-nav-button {
		margin: 0px;
		font-size: 3rem;
		padding-top: 0px;
		padding-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
		line-height: 3rem;
		transition: all 0.5s ease;
	}

	::-webkit-scrollbar-track {
		background: linear-gradient(to right, #ff6663, #feb144, #fdfd97, #9ee09e, #9ec1cf, #cc99c9) 0 0 / 100% 100%;
	}
</style>
