import { minesweeper } from "./games/minesweeper/minesweeper";
import { sudoku } from "./games/sudoku/sudoku";
import { wordle } from "./games/wordle/wordle";

/**
 * The metadata for a game.
 */
export class GameMetadata {
    /**
     * The official name of the game.
     */
    public name: string;

    /**
     * Some other names for the game.
     * Be comedic.
     */
    public aka: string;

    /**
     * The description of the game.
     */
    public description: string;

    /**
     * The emoji that represents the game.
     */
    public emoji: string;

    constructor(
        name: string,
        aka: string,
        description: string,
        emoji: string,
    ) {
        this.name = name;
        this.aka = aka;
        this.description = description;
        this.emoji = emoji;
    }
}

/**
 * All of the games implemented and up for display.
 * Ideally the games are each on their own route and implemented independent from a class/structure - this list is purely for purposes like listing them on the `/games` route.
 */
export const allGames = [
    minesweeper,
    sudoku,
    wordle,
];