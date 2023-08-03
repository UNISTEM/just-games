<script>
	import { palette } from "$lib/palette";
	import NavButton from "./NavButton.svelte";

	let buttonData = [
		["/", "home 🏡", "yellow"],
		["/games", "games 🎮", "orange"],
		["/about", "about 🌈", "blue"],
		["/resources", "resources 🧰", "mint"],
		["/login", "log in 🚪", "login"],
		["/signup", "sign up ✨", "signup"]
	];
</script>

<div class="navbar text-2xl font-semibold grid-cols-6 font-sans inline-grid w-full h-14">
	{#each buttonData as button}
		<NavButton anchor={button[0]} text={button[1]} hoverColor={button[2]} />
	{/each}
</div>

<style>
	.navbar {
		margin-bottom: 50px;
		padding: 50px;
	}
</style>
