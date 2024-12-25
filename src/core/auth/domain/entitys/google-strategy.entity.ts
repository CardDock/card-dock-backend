export class GoogleStrategy {
	constructor(
		public email: string,
		public name: string,
		public firstName: string,
		public lastName: string,
		public picture: string,
		public accessToken: string,
	) {}
}
