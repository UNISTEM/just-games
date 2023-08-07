<script lang="ts">
	import { allGames } from "$lib/core/game";
	import CarouselGameItem from "./CarouselGameItem.svelte";
	import GameCarouselHelpText from "./GameCarouselHelpText.svelte";

	export let gameName: string | undefined;
	export let gameJpName: string | undefined;
</script>

<hr />
<div class="games-carousel">
	{#each allGames as gameData}
		<CarouselGameItem {gameData} bind:gameName bind:gameJpName />
	{/each}
</div>
<br />
<GameCarouselHelpText {gameName} {gameJpName} />
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
		overscroll-behavior-inline: contain;
	}

	::-webkit-scrollbar-track {
		background: linear-gradient(to right, #ff6663, #feb144, #fdfd97, #9ee09e, #9ec1cf, #cc99c9) 0 0 / 100% 100%;
	}
</style>
