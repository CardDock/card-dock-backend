import { StringValueObject } from '@src/shared/domain/value-objects/string-value-object';

export class UserRole extends StringValueObject {
	constructor(private readonly role: string) {
		super(role);
	}
}
