<script lang="ts">
	import lodash from "lodash";
	import { page } from "$app/stores";

	const somethingHappenedTexts = [
		"chat...",
		"we need to sit down and talk ok",
		"having a breakdown rn",
		"ma'am this is a wendy's 🍤",
		"oops, anyways",
		"existential dread who?",
		"call 1-800-ERROR now to get this error fixed! 📞",
		"an error occurred! our operators would be with you shortly, in roughly 23837746918 minutes.",
		"🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨",
		"man i need to come up with better error messages 😩",
		"gotta fix that step-",
		"um, actually... 🤓",
		"sashay, away."
	];

	/**
	 * Gets the text inside the something-happened flavor text.
	 */
	function getSmthHappenedText(): string {
		return `"${lodash.sample(somethingHappenedTexts)}"`;
	}
</script>

<div class="text-center">
	<h3 class="smth-happened-text font-semibold italic text-2xl">{getSmthHappenedText()}</h3>
	<div class="error">
		<span class="text-[50px] font-semibold">error code</span>&nbsp;&nbsp;&nbsp;&nbsp;
		<span class="error-code text-[200px] font-bold gradient-text">{$page.status}</span>
	</div>
	<h4 class="text-1xl italic font-semibold">
		so what i got was <span class="gradient-text">{`"${$page.error?.message}"`}</span>, do with that what you will
	</h4>
</div>

<style>
	.smth-happened-text {
		margin-top: 50px;
		margin-bottom: 0px;
	}
	.error {
		padding-top: 0px;
		margin-top: 0px;
	}
</style>
