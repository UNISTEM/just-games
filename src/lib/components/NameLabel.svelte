<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { random as randomEmoji } from "node-emoji";

	let emoji: string;
	randomizeEmoji();

	function randomizeEmoji() {
		emoji = randomEmoji().emoji;
	}

	afterNavigate(randomizeEmoji);
</script>

<a href="/" class="text-5xl p-8 font-bold gradient-text nobr">{emoji} - just games!</a>
