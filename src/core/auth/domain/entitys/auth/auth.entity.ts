import { AggregateDomain } from '@src/shared/domain/aggregate/aggregate-domain';
import { AuthPassword } from './value-object/auth-password';
import { AuthCreateDomainEvent } from './events/auth-create-domain.event';
import { AuthUsername } from './value-object/auth-name';

export class AuthEntity extends AggregateDomain {
	private constructor(
		private readonly _username: AuthUsername,
		private readonly _password: AuthPassword,
	) {
		super();
	}

	static create(username: string, password: string): AuthEntity {
		const usernameInstance = new AuthUsername(username);
		const passwordInstance = new AuthPassword(password);

		const authEntity = new AuthEntity(usernameInstance, passwordInstance);

		authEntity.registerCreationEvent();

		return authEntity;
	}

	get username(): AuthUsername {
		return this.username;
	}

	get password(): AuthPassword {
		return this.password;
	}

	private registerCreationEvent(): void {
		this.record(new AuthCreateDomainEvent(this));
	}
}
