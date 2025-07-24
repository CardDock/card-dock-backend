import { Inject, Injectable } from '@nestjs/common';
import { AuthEntity } from '../../domain/entitys/auth/auth.entity';
import { AuthDto } from '../dtos/auth.dto';
import { TokenManagerPort } from '../ports/token-manager.port';
import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';
import { AUTH_REPOSITORY_PORT, TOKEN_MANAGER_PORT } from '../common/tokens';

@Injectable()
export class AuthAplicationService {
	constructor(
		@Inject(TOKEN_MANAGER_PORT)
		private readonly tokenManager: TokenManagerPort,
		@Inject(AUTH_REPOSITORY_PORT)
		private readonly authRepository: AuthRepositoryPort,
	) {}

	async loginWithCredentials(
		authDto: AuthDto,
	): Promise<{ access_token: unknown }> {
		const auth = AuthEntity.create(authDto.username, authDto.password);

		await this.validateAuthCredentials(auth);

		return {
			access_token: this.tokenManager.signToken({
				username: auth.username.getValue(),
				password: auth.password.getValue(),
			}),
		};
	}

	private async validateAuthCredentials(auth: AuthEntity): Promise<void> {
		const user = await this.authRepository.findByCredencial(auth);

		if (!user) throw new Error('Credenciales incorrectas');
	}
}
