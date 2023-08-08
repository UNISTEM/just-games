<script lang="ts">
	export let searchTerm: string = "";
</script>

<div class="flex justify-center mt-5">
	<input
		type="text"
		maxlength="30"
		class="text-6xl gradient-text font-semibold"
		placeholder="search for a game!"
		bind:value={searchTerm}
	/>
</div>
