import { chess } from "./games/chess/chess";
import { mastermind } from "./games/mastermind/mastermind";
import { minesweeper } from "./games/minesweeper/minesweeper";
import { snake } from "./games/snake/snake";
import { sudoku } from "./games/sudoku/sudoku";
import { wordle } from "./games/wordle/wordle";

/**
 * The metadata of a game.
 */
export type GameMetadata = {
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
};

/**
 * All of the games implemented and up for display.
 * Ideally the games are each on their own route and implemented independent from a class/structure - this list is purely for purposes like listing them on the `/games` route.
 */
export const allGames = [minesweeper, sudoku, wordle, chess, mastermind, snake];
