<script>
	import NameLabel from "./NameLabel.svelte";
	import NavButton from "./NavButton.svelte";

	let buttonData = [
		["/", "home 🏡"],
		["/games", "games 🎮"],
		["/about", "about 🌈"],
		["/resources", "resources 🧰"],
		["/login", "log in 🚪"],
		["/signup", "sign up ✨"]
	];
</script>

<header class="navbar h-14">
	<nav>
		<hr class="m-0 mb-5" />
		<div class="float-left mt-3"><NameLabel /></div>
		<div class="text-2xl font-semibold grid-cols-6 font-sans inline-grid nobr float-right">
			{#each buttonData as button}
				<NavButton link={button[0]} text={button[1]} />
			{/each}
		</div>
	</nav>
</header>
<br />
<hr class="-mt-1 m-0 mb-5 ml-[3.2rem] mr-[3.2rem]" />

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
