<script lang="ts">
	export let gameName: string | undefined;
</script>

<h3 class="flex justify-center font-semibold text-2xl">
	{#if gameName}
		you're hovering on&nbsp;<span class="gradient-text">{gameName}</span>.
	{:else}
		hover on&nbsp;<span class="gradient-text">a button!&nbsp;</span>
	{/if}
</h3>
