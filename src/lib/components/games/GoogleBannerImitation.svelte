<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";
	import GoogleColoredTitle from "./GoogleColoredTitle.svelte";
	import ImFeelingLuckyButton from "./search/ImFeelingLuckyButton.svelte";

	export let searchResults: GameMetadata[];
</script>

<div class="flex justify-center">
	<div class="-mt-5">
		<button class="gradient-text font-semibold text-2xl">games search</button>
		<ImFeelingLuckyButton {searchResults} />
	</div>
</div>
<div class="flex justify-center">
	<h3 class="text-[1.25rem] font-semibold mt-2 gradient-text">
		<GoogleColoredTitle /> offered in english only D: will someone pls help me
		<a href="https://github.com/developer-ramen/just-games" target="_blank">add translations</a>
	</h3>
</div>
