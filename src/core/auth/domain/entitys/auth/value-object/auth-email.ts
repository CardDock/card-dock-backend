export class AuthEmail {
	constructor(private readonly email: string) {
		this.guardValidEmail();
	}

	private guardValidEmail(): void {
		if (!this.email.includes('@')) {
			throw new Error('Invalid email');
		}
	}

	public get(): string {
		return this.email;
	}
}
