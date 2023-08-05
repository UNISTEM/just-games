import { minesweeper } from "./games/minesweeper/minesweeper";
import { sudoku } from "./games/sudoku/sudoku";
import { wordle } from "./games/wordle/wordle";

export type GameMetadata = {
	name: string;
	aka: string;
	description: string;
	emoji: string;
};

/**
 * All of the games implemented and up for display.
 * Ideally the games are each on their own route and implemented independent from a class/structure - this list is purely for purposes like listing them on the `/games` route.
 */
export const allGames = [minesweeper, sudoku, wordle];
