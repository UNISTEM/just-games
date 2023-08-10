import { chess } from "./games/chess/chess";
import { mastermind } from "./games/mastermind/mastermind";
import { minesweeper } from "./games/minesweeper/minesweeper";
import { snake } from "./games/snake/snake";
import { sudoku } from "./games/sudoku/sudoku";
import { wordle } from "./games/wordle/wordle";

/**
 * All of the games implemented and up for display.
 * Ideally the games are each on their own route and implemented independent from a class/structure - this list is purely for purposes like listing them on the `/games` route.
 */
export const allGames = [minesweeper, sudoku, wordle, chess, mastermind, snake];

export function mapJpNameToName(jpName: string): string {
	return allGames.filter((gameData) => gameData.jpName == jpName)[0].name;
}
