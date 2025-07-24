export class ProfileEntity {
	constructor(
		private readonly _email: string,
		private readonly _name: string,
		private readonly _picture: string,
	) {}

	static create(email: string, name: string, picture: string) {
		const profile = new ProfileEntity(email, name, picture);

		// * Crear un evento de dominio de que se ha creado una entidad de usuario

		return profile;
	}

	get email(): string {
		return this._email;
	}

	get name(): string {
		return this._name;
	}

	get picture(): string {
		return this._picture;
	}
}

// * TODO annadir en esta entidad los value objects de la entidad
// * TODO pensar un cambio para cuando necesite facebook y creascan los numeros de oauths2

