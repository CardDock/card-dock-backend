import { Inject, Injectable } from '@nestjs/common';
import { AuthEntity } from '../../domain/entitys/auth/auth.entity';
import { AuthUsername } from '../../domain/entitys/auth/value-object/auth-name';
import { AuthPassword } from '../../domain/entitys/auth/value-object/auth-password';
import { AuthDto } from '../dtos/auth.dto';
import { TokenManagerPort } from '../ports/token-manager.port';
import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';

@Injectable()
export class AuthAplicationService {
	constructor(
		@Inject('TokenManagerPort')
		private readonly tokenManager: TokenManagerPort,
		@Inject('AuthRepositoryPort')
		private readonly authRepository: AuthRepositoryPort,
	) {}

	loginWithCredentials(authDto: AuthDto): { access_token: any } {
		const auth = AuthEntity.create(
			new AuthUsername(authDto.username),
			new AuthPassword(authDto.password),
		);

		if (!this.validateAuthCredentials(auth)) {
			throw new Error('Credenciales incorrectas');
		}

		return {
			access_token: this.tokenManager.signToken({
				username: auth.username.getValue(),
				password: auth.password.getValue(),
			}),
		};
	}

	private async validateAuthCredentials(auth: AuthEntity): Promise<boolean> {
		const user = await this.authRepository.findByCredencial(auth);

		return user ? true : false;
	}
}
