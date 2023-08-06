<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";

	export let gameData: GameMetadata;

	let anchorText = gameData.jpName;
</script>

<div>
	<button
		class="pb-8 hover:bg-black hover:border-white"
		on:mouseenter={() => {
			anchorText = gameData.katakana;
		}}
		on:mouseleave={() => {
			anchorText = gameData.jpName;
		}}
	>
		<a href={`/games/${gameData.name}`} class="no-underline gradient-text text-8xl font-semibold">
			{anchorText}
		</a>
	</button>
</div>
