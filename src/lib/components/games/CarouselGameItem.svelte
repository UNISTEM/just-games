<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";

	export let gameData: GameMetadata;
	export let gameName: string | undefined = undefined;
	export let gameJpName: string | undefined = undefined;
</script>

<div>
	<button
		class="pb-8 hover:bg-black hover:border-white text-8xl"
		on:mouseenter={() => {
			gameName = gameData.name;
			gameJpName = gameData.jpName;
		}}
		on:mouseleave={() => {
			gameName = undefined;
			gameJpName = undefined;
		}}
	>
		<a href={`/games/${gameData.name}`} class="no-underline gradient-text font-semibold">
			{gameData.jpName}
		</a>
	</button>
</div>
