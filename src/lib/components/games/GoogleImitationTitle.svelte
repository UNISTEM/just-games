<script lang="ts">
	import GoogleColoredTitle from "./GoogleColoredTitle.svelte";
	let titleHovered = false;
</script>

<div class="flex justify-center mb-7 -m-8">
	<h1
		class="text-[100px] font-bold"
		on:mouseenter={() => {
			titleHovered = true;
		}}
		on:mouseleave={() => {
			titleHovered = false;
		}}
	>
		{#if titleHovered}
			<span class="gradient-text text-3xl">yes i know im imitating google shut up</span>
		{:else}
			<GoogleColoredTitle />
		{/if}
	</h1>
</div>
