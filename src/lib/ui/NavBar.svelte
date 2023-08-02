<script lang="ts">
	import { page } from "$app/stores";

	/**
	 * Checks if a path starts with the provided route.
	 * For example, `pathStartsWith("about")` will match the paths `/about/`,
	 * `/about/foo/bar/`, but not `/x/` or `/x/about/`.
	 *
	 * Note that if the route is `/`, it will only match with the root
	 * route (`/`).
	 *
	 * @param route Specifies the route to search for at the start of the path.
	 *              Note that if the route is `root`, it will only match with
	 *              the root route (`/`).
	 */
	export function pathStartsWith(route: string): boolean {
		const path = $page.url.pathname;
		return route == "/" ? path == "/" : path.startsWith(route);
	}

	/**
	 * Returns an HTML class that highlights the text to be rainbow when
	 * it matches the route, and returns nothing otherwise.
	 *
	 * Note that the function will return ` rainbow-text` (the space is there)
	 * if it matches.
	 *
	 * @param route: Specifies the route to search for at the start of the path.
	 * @see pathStartsWith
	 */
	export function classForMatchingPath(route: string): string {
		return pathStartsWith(route) ? " rainbow-text" : "";
	}

	
</script>

<div class="text-2xl font-semibold grid-cols-6 font-sans inline-grid w-full h-14 sticky">
	<button id="home-navbar-button" class={"hover:bg-red-400" + classForMatchingPath("/")}><a href="/">home 🏡</a></button>
	<button id="games-navbar-button" class={"hover:bg-blue-400" + classForMatchingPath("/games")}><a href="/games">games 🎮</a></button>
	<button id ="about-navbar-button" class={"hover:bg-yellow-400" + classForMatchingPath("/about")}><a href="/about">about 🌈</a></button>
	<button id="resources-navbar-button" class={"hover:bg-green-400" + classForMatchingPath("/resources")}
		><a href="/resources">resources 🧰</a></button
	>
	<button id="login-navbar-button" class={"hover:bg-purple-400" + classForMatchingPath("/login")}><a href="/login">log in 🚪</a></button>
	<button id="signup-navbar-button" class={"hover:bg-indigo-400" + classForMatchingPath("/signup")}><a href="/signup">sign up ✨</a></button>
</div>

<style>
	div {
		padding: 50px;
	}
</style>
