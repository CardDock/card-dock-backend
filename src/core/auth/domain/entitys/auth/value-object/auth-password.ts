export class AuthPassword {
	constructor(public readonly password: string) {
		this.validPassword();
	}

	private validPassword() {
		if (this.password.length < 6) {
			throw new Error('Password must be at least 6 characters');
		}
	}
}
