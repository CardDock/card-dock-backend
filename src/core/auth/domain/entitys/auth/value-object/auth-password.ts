export class AuthPassword {
	constructor(public readonly password: string) {
		this.validPassword();
	}

	isEqual(password: AuthPassword): boolean {
		return this.password === password.valueOf();
	}

	valueOf(): string {
		return this.password;
	}

	private validPassword() {
		if (this.password.length < 6) {
			throw new Error('Password must be at least 6 characters');
		}
	}
}
