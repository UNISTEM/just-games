<script lang="ts">
	let gameButton: HTMLButtonElement;
	let anchorText = "take me to the games!";

	function extendByOneArrow() {
		if (anchorText !== "take me to the games!") {
			anchorText += "→";
			setTimeout(extendByOneArrow, 100);
		}
	}
</script>

<div class="grid justify-center items-center grid-rows-2">
	<button
		class="p-10 mt-10 rounded-2xl hover:bg-gradient-to-r hover:3xl transition-all ease-linear duration-[0.5]"
		bind:this={gameButton}
		on:mouseenter={() => {
			anchorText = "🎮 ";
			extendByOneArrow();
		}}
		on:mouseleave={() => {
			anchorText = "take me to the games!";
		}}
	>
		<a href="/games" class="text-4xl font-bold">{anchorText}</a></button
	>
</div>
