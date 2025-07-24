import { StringValueObject } from '@src/shared/domain/value-objects/string-value-object';
import { NoEmailException } from '../../exceptions/no-email.exception';

export class UserEmail extends StringValueObject {
	constructor(private readonly email: string) {
		super(email);

		if (!this.isValidEmail(email)) {
			throw new NoEmailException();
		}
	}

	private isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
}
