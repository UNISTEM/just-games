<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";

	export let gameData: GameMetadata;
</script>

<div>
	<hr />
	<button class="pb-8">
		<a href={`/games/${gameData.name}`} class="no-underline gradient-text text-9xl">{gameData.emoji}</a>
	</button>
	<hr />
</div>
