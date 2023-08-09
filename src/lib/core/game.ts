import lodash from "lodash";

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
