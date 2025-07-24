import { StringValueObject } from '@src/shared/domain/value-objects/string-value-object';

export class UserName extends StringValueObject {
	constructor(private readonly name: string) {
		super(name);
	}
}
