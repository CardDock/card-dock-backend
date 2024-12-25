export class AuthName {
	constructor(public readonly value: string) {
		if (!this.validate(value)) throw new Error('Invalid name');
	}

	private validate(value: string): boolean {
		if (value.length < 3 || value.length > 20) return false;

		return true;
	}
}
