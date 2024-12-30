export class UserEntity {
	constructor(
		public readonly email: string,
		public readonly name: string,
		public readonly username: string,
	) {}
}
