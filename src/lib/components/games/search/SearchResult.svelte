<script lang="ts">
	import type { GameMetadata } from "$lib/core/game";

	export let searchResult: GameMetadata;
</script>

<button
	class="font-semibold text-center text-2xl w-[60vw] border-white border-2 p-5 mb-5 rounded-3xl hover:rounded-[9xl] hover:bg-black hover:border-white transition-all duration-500"
>
	<a href={`/games/${searchResult.name}`} class="no-underline">
		<h1 class="gradient-text font-extrabold text-6xl underline">{searchResult.name}</h1>
		<h2>aka <span class="gradient-text font-bold text-xl">{searchResult.aka}</span></h2>
		<h2 class="text-3xl">
			description: <span class="gradient-text font-bold">{searchResult.description}</span>
		</h2>
	</a>
</button>
