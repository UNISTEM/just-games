<script lang="ts">
	let anchorText = "take me to the games!";
	let arrowsSpawned = 0;

	function extendByOneArrow() {
		if (!anchorText.startsWith("take me to the games!")) {
			anchorText += "→";
			arrowsSpawned++;
			setTimeout(extendByOneArrow, 50);
		}
	}
</script>

<div class="grid justify-center items-center grid-rows-2">
	<button
		class="p-10 mt-10 bg-gradient-to-r from-red to-yellow via-orange rounded-2xl hover:bg-gradient-to-r hover:from-blue hover:to-violet hover:via-green hover:3xl transition-all ease-linear duration-[0.5]"
		on:mouseenter={() => {
			anchorText = "🎮 ";
			extendByOneArrow();
		}}
		on:mouseleave={() => {
			anchorText = "take me to the games!";
			arrowsSpawned = 0;
		}}
	>
		<a href="/games" class="text-4xl font-bold">{anchorText}</a></button
	>
</div>
