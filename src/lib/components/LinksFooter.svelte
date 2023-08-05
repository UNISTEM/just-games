<footer>
	<p class="mt-20 gradient-text font-semibold text-center">
		<a href="/">home</a>&nbsp;
		<a href="/games">games</a>&nbsp;
		<a href="/about">about</a>&nbsp;
		<a href="/resources">resources</a>&nbsp;
		<a href="/login">log in</a>&nbsp;
		<a href="/signup">sign up</a>
		<br />
		<a target="_blank" href="https://github.com/developer-ramen/just-games">github repo</a>&nbsp;
		<a target="_blank" href="https://github.com/developer-ramen/just-games/issues">report an issue</a>&nbsp;
		<a target="_blank" href="https://google.com">to-do (trello link, to be set up soon)</a>
	</p>
</footer>

<style>
	a {
		--bg-size: 400%;
		color: rgba(255, 255, 255, 25%);
		display: inline-block;
		background-size: 400% auto;
		background: var(--gradient-image);
		background-clip: text;
		transition: color 0.5s ease;
		animation: MOVING-gradient-text 20s infinite linear;

		&a:hover {
			color: rgba(255, 255, 255, 75%);
		}
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
