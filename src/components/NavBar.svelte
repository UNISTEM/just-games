<script>
	import NavButton from "./NavButton.svelte";

	let buttonData = [
		["/", "home 🏡", "bg-yellow-500"],
		["/games", "games 🎮", "bg-orange-500"],
		["/about", "about 🌈", "bg-blue-500"],
		["/resources", "resources 🧰", "bg-mint-500"],
		["/login", "log in 🚪", "bg-gradient-to-r from-orange-500 to-blue-500"],
		["/signup", "sign up ✨", "bg-gradient-to r from-orange-500 to-blue-500 via-yellow-500 via-mint-500"]
	];
</script>

<div class="text-2xl font-semibold grid-cols-6 font-sans inline-grid w-full h-14 sticky">
	{#each buttonData as button}
		<NavButton anchor={button[0]} text={button[1]} tailwindHoverClass={button[2]} />
	{/each}
</div>

<style>
	div {
		padding: 50px;
	}
</style>
