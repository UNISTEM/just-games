import lodash from "lodash";
import { chess } from "./games/chess/chess";
import { mastermind } from "./games/mastermind/mastermind";
import { minesweeper } from "./games/minesweeper/minesweeper";
import { snake } from "./games/snake/snake";
import { sudoku } from "./games/sudoku/sudoku";
import { wordle } from "./games/wordle/wordle";

/**
 * The metadata of a game.
 */
export class GameMetadata {
	/**
	 * The name of the game.
	 */
	name: string;

	/**
	 * Another name that represents the game.
	 * Be comedic.
	 */
	aka: string;

	/**
	 * The description of a game.
	 */
	description: string;

	/**
	 * The character(s) that represents the game.
	 * Don't ask me why.
	 */
	jpName: string;

	constructor(name: string, aka: string, description: string, jpName: string) {
		this.name = name;
		this.aka = aka;
		this.description = description;
		this.jpName = jpName;
	}

	getRouteToGame(): string {
		return `/games/${name}`;
	}

	getGameSearchName(): string {
		// No one expects this. Haha!
		const zeroWidthSpace = "​";
		return lodash.join([this.name, this.jpName, this.description, this.aka], zeroWidthSpace);
	}
}

/**
 * All of the games implemented and up for display.
 * Ideally the games are each on their own route and implemented independent from a class/structure - this list is purely for purposes like listing them on the `/games` route.
 */
export const allGames = [minesweeper, sudoku, wordle, chess, mastermind, snake];

export function mapJpNameToName(jpName: string): string {
	return allGames.filter((gameData, _) => gameData.jpName == jpName)[0].name;
}
