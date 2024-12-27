import { AggregateDomain } from '@src/shared/domain/aggregate/aggregate-domain';
import { AuthEmail } from './value-object/auth-email';
import { AuthName } from './value-object/auth-name';
import { AuthPassword } from './value-object/auth-password';
import { AuthCreateDomainEvent } from './events/auth-create-domain.even';

export class AuthEntity extends AggregateDomain {
	constructor(
		public readonly name: AuthName,
		public readonly email: AuthEmail,
		public readonly password: AuthPassword,
	) {
		super();
	}

	static create(
		name: AuthName,
		email: AuthEmail,
		password: AuthPassword,
	): AuthEntity {
		const authEntity = new AuthEntity(name, email, password);

		authEntity.record(new AuthCreateDomainEvent(authEntity));

		return authEntity;
	}

	passwordMatches(password: AuthPassword): boolean {
		return this.password.isEqual(password);
	}
}
