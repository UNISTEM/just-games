/**
 * The metadata of a game.
 */
export class GameMetadata {
	/**
	 * The name of the game.
	 */
	name: string;

	/**
	 * Alternate name. To be expanded.
	 */
	altName: string;

	constructor(name: string, altName: string) {
		this.name = name;
		this.altName = altName;
	}

	getRouteToGame(): string {
		return `/games/${this.name}`;
	}
}
