<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";

    export let gameData: GameMetadata;
</script>

<button>
    <a href={`/games/${gameData.name}`}>{gameData.emoji}<br>{gameData.name}</a>
</button>