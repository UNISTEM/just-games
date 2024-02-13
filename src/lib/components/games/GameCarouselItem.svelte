<script lang="ts">
	import { goto } from "$app/navigation";
	import type { GameMetadata } from "$lib/core/game";

	export let gameData: GameMetadata;
	export let gameName: string | undefined = undefined;
	export let gameAltName: string | undefined = undefined;
</script>

<div>
	<button
		class="pb-8 text-8xl vertical gradient-text"
		on:mouseenter={() => {
			gameName = gameData.name;
			gameAltName = gameData.altName;
		}}
		on:mouseleave={() => {
			gameName = undefined;
			gameAltName = undefined;
		}}
		on:click={() => {
			goto(gameData.getRouteToGame());
		}}
	>
		<a href={gameData.getRouteToGame()} class="no-underline font-semibold">
			{gameData.altName}
		</a>
	</button>
</div>

<style>
	.vertical {
		writing-mode: vertical-rl;
		text-orientation: upright;
	}
</style>
