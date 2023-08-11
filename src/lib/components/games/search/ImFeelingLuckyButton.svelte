<script lang="ts">
	import lodash from "lodash";
	import type { GameMetadata } from "$lib/core/game";
	import { afterNavigate } from "$app/navigation";

	export let searchResults: GameMetadata[];
	$: randomLink = lodash.sample(searchResults)?.getRouteToGame();

	function generateRandomLink() {
		randomLink = lodash.sample(searchResults)?.getRouteToGame();
	}
	afterNavigate(generateRandomLink);
</script>

<button class="gradient-text font-semibold text-2xl">
	<a class="no-underline" href={randomLink}>i'm feeling lucky</a>
</button>
