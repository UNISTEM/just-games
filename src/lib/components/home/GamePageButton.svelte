<script lang="ts">
	import { goto } from "$app/navigation";

	let gameButton: HTMLButtonElement;
	let anchorText = "take me to the games!";

	function extendByOneArrow() {
		if (anchorText !== "take me to the games!") {
			anchorText += "→";
			setTimeout(extendByOneArrow, 100);
		}
	}
</script>

<div class="grid justify-center items-center">
	<button
		class="p-10 mt-8 text-4xl font-bold gradient-text rounded-2xl hover:3xl transition-all ease-linear duration-[0.5]"
		bind:this={gameButton}
		on:mouseenter={() => {
			anchorText = "🎮 ";
			extendByOneArrow();
		}}
		on:mouseleave={() => {
			anchorText = "take me to the games!";
		}}
		on:click={() => {
			goto("/games");
		}}
	>
		<a href="/games" class="">{anchorText}</a>
	</button>
</div>
