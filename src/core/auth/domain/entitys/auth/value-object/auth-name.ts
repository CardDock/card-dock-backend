import { StringValueObject } from '@src/shared/domain/value-objects/string-value-object';

export class AuthUsername extends StringValueObject {
	private minLength: number = 1;
	private maxLength: number = 250;

	constructor(public readonly username: string) {
		super(username);
		if (this.validateLengthValue(username)) throw new Error('Invalid name');
	}

	private validateLengthValue(username: string): boolean {
		return username.length > this.minLength || username.length < this.maxLength
			? false
			: true;
	}
}
