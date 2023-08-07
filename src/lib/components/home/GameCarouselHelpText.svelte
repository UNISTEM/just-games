<script lang="ts">
	export let gameName: string | undefined;
	export let gameJpName: string | undefined;
</script>

<h3 class="help-text font-semibold text-2xl">
	{#if gameName && gameJpName}
		you're hovering on&nbsp;<span class="gradient-text">{gameName}</span>. |「<span class="gradient-text"
			>{gameJpName}</span
		>」が選択されています。
	{:else}
		hover on&nbsp;<span class="gradient-text">a button!&nbsp;</span> |&nbsp;
		<span class="gradient-text">ボタン</span>&nbsp;の上にマウスを置いてください！
	{/if}
</h3>

<style>
	.help-text {
		display: flex;
		justify-content: center;
	}
</style>
