import { UserEmail } from './value-objects/user-email';
import { UserName } from './value-objects/user-name';
import { UserPicture } from './value-objects/user-picture';
import { UserRole } from './value-objects/user-role';

export class UserEntity {
	constructor(
		public readonly email: UserEmail,
		public readonly name: UserName,
		public readonly picture?: UserPicture,
		public readonly id?: string,
		public readonly role?: UserRole,
		public readonly isActive?: boolean,
		public readonly verified?: boolean,
	) {}
}
