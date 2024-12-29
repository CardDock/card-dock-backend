import { Inject, Injectable } from '@nestjs/common';
import { AuthEntity } from '../../domain/entitys/auth/auth.entity';
import { AuthEmail } from '../../domain/entitys/auth/value-object/auth-email';
import { AuthName } from '../../domain/entitys/auth/value-object/auth-name';
import { AuthPassword } from '../../domain/entitys/auth/value-object/auth-password';
import { AuthDto } from '../dtos/auth.dto';
import { TokenSignerPort } from '../ports/token-signer.port';

@Injectable()
export class AuthAplicationService {
	constructor(
		@Inject('TokenSignerPort')
		private readonly tokenSigner: TokenSignerPort,
	) {}

	loginWithCredentials(authDto: AuthDto): { access_token: unknown } {
		const authName = new AuthName(authDto.name);
		const authEmail = new AuthEmail(authDto.email);
		const authPassword = new AuthPassword(authDto.password);

		const authEntity = AuthEntity.create(authName, authEmail, authPassword);

		const payload = {
			name: authEntity.name,
			email: authEntity.email,
			password: authEntity.password,
		};

		return {
			access_token: this.tokenSigner.signToken(payload),
		};
	}
}
