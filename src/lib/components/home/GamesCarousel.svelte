<script>
	import { minesweeper } from "$lib/core/games/minesweeper/minesweeper";

	
import CarouselGameItem from "./CarouselGameItem.svelte";


</script>

<div class="w-full bg-white">
    <CarouselGameItem gameData={minesweeper} />
</div>