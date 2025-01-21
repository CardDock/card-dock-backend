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

	static create(usernameDto: string, passwordDto: string): AuthEntity {
		const username = new AuthUsername(usernameDto);
		const password = new AuthPassword(passwordDto);

		const authEntity = new AuthEntity(username, password);
		authEntity.registerCreationEvent();

		return authEntity;
	}

	private registerCreationEvent(): void {
		this.record(new AuthCreateDomainEvent(this));
	}
}
