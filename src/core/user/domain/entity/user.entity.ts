export class UserEntity {
	constructor(
		public readonly id: string,
		public readonly email: string,
		public readonly name: string,
		public readonly username: string,
		public readonly role: string,
	) {}
}
