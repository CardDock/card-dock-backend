import { StringValueObject } from '@src/shared/domain/value-objects/string-value-object';

export class AuthPassword extends StringValueObject {
	constructor(public readonly password: string) {
		super(password);
	}
}
