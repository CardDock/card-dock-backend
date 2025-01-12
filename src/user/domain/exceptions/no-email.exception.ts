export class NoEmailException extends Error {
	private static readonly message = 'Invalid email address';

	constructor(message?: string) {
		super(message);
	}
}
