<script lang="ts">
	import { page } from "$app/stores";
</script>

<div class="text-center">
	<div class="pt-0 mt-0">
		<span class="text-[50px] font-semibold">error code</span>
		<span class="error-code text-[200px] font-bold gradient-text">&nbsp;{$page.status}</span>
	</div>
	<h4 class="text-1xl italic font-semibold">
		so what i got was <span class="gradient-text">{`"${$page.error?.message}"`}</span>, do with that what you will
	</h4>
</div>
