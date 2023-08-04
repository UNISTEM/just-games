<script>
	import NavButton from "./NavButton.svelte";

	let buttonData = [
		["/", "home 🏡", "red"],
		["/games", "games 🎮", "yellow"],
		["/about", "about 🌈", "blue"],
		["/resources", "resources 🧰", "green"],
		["/login", "log in 🚪", "login"],
		["/signup", "sign up ✨", "signup"]
	];
</script>

<div class="navbar h-14 grid-cols-10">
	<div class="float-left mt-2">
		<a href="/" class="text-5xl font-bold gradient-text nobr">🎮 - just games!</a>
	</div>
	<div class="text-2xl font-semibold grid-cols-6 font-sans inline-grid nobr float-right">
		{#each buttonData as button}
			<NavButton anchor={button[0]} text={button[1]} hoverColor={button[2]} />
		{/each}
	</div>
</div>

<style>
	.navbar {
		margin-bottom: 50px;
		padding: 50px;
	}

	.nobr {
		white-space: nowrap;
		position: relative;
		display: inline;
	}
</style>
