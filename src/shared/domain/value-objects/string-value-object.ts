export class StringValueObject {
	constructor(private readonly value: string) {
		this.validateValue(value);
	}

	private validateValue(value: string): void {
		if (!value) {
			throw new Error(this.getValue() + 'Invalid value');
		}
	}

	getValue() {
		return this.value;
	}
}
