<script lang="ts">
	export let anchor: string;
	export let text: string;
</script>

<button class="hover:bg-black hover:border-white"><a class="no-underline gradient-text" href={anchor}>{text}</a></button
>
