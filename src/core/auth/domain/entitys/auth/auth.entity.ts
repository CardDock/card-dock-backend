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
		const video = new AuthEntity(name, email, password);

		video.record(new AuthCreateDomainEvent());

		return video;
	}
}
