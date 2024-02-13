<script lang="ts">
	import GoogleColoredTitle from "./GoogleColoredTitle.svelte";
	let titleHovered = false;
</script>

<div class="flex justify-center">
	<h1
		class="text-[80px] font-bold"
		on:mouseenter={() => {
			titleHovered = true;
		}}
		on:mouseleave={() => {
			titleHovered = false;
		}}
	>
		{#if titleHovered}
			<span class="gradient-text text-3xl">eat your heart out google</span>
		{:else}
			<GoogleColoredTitle />
		{/if}
	</h1>
</div>
