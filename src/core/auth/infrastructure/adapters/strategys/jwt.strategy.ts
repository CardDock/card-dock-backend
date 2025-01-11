import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtKey } from '../../constants/jwt-key';
import { AuthRepositoryPort } from '@src/core/auth/domain/ports/auth-repository-port';
import { AuthUsername } from '@src/core/auth/domain/entitys/auth/value-object/auth-name';
import { AuthPassword } from '@src/core/auth/domain/entitys/auth/value-object/auth-password';
import { AuthEntity } from '@src/core/auth/domain/entitys/auth/auth.entity';
import { Inject } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		@Inject('AuthRepositoryPort')
		private readonly authRepository: AuthRepositoryPort,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: JwtKey.secret,
		});
	}

	async validate(payload: any): Promise<any> {
		const auth = AuthEntity.create(
			new AuthUsername(payload.username),
			new AuthPassword(payload.password),
		);

		const user = await this.authRepository.findByCredencial(auth);

		if (!user) {
			throw new Error('User not found');
		}

		return { userId: payload.sub, username: payload.username };
	}
}
