import { AggregateDomain } from '@src/shared/domain/aggregate/aggregate-domain';
import { AuthPassword } from './value-object/auth-password';
import { AuthCreateDomainEvent } from './events/auth-create-domain.even';
import { AuthUsername } from './value-object/auth-name';

export class AuthEntity extends AggregateDomain {
	constructor(
		public readonly username: AuthUsername,
		public readonly password: AuthPassword,
	) {
		super();
	}

	static create(username: AuthUsername, password: AuthPassword): AuthEntity {
		const authEntity = new AuthEntity(username, password);

		authEntity.record(new AuthCreateDomainEvent(authEntity));

		return authEntity;
	}
}
