<script lang="ts">
	import lodash from "lodash";
	import type { GameMetadata } from "$lib/core/game";
	import GoogleImitationTitle from "./GoogleImitationTitle.svelte";
	import { afterNavigate } from "$app/navigation";

	export let searchResults: GameMetadata[];
	$: randomLink = lodash.sample(searchResults)?.getRouteToGame();

	function generateRandomLink() {
		randomLink = lodash.sample(searchResults)?.getRouteToGame();
	}
	afterNavigate(generateRandomLink);
</script>

<div class="flex justify-center">
	<div class="-mt-5">
		<button class="gradient-text font-semibold text-2xl">games search</button>
		<button class="gradient-text font-semibold text-2xl">
			<a class="no-underline" href={randomLink}>i'm feeling lucky</a>
		</button>
	</div>
</div>
<div class="flex justify-center">
	<h3 class="text-[1.25rem] font-semibold mt-2 gradient-text">
		<GoogleImitationTitle /> offered in english only D: will someone pls help me
		<a href="https://github.com/developer-ramen/just-games" target="_blank">add translations</a>
	</h3>
</div>
