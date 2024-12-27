import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from '../../domain/entitys/auth/auth.entity';
import { AuthDto } from '../dtos/auth.dto';
import { AuthName } from '../../domain/entitys/auth/value-object/auth-name';
import { AuthEmail } from '../../domain/entitys/auth/value-object/auth-email';
import { AuthPassword } from '../../domain/entitys/auth/value-object/auth-password';

@Injectable()
export class AuthService {
	constructor(private jwtTokenService: JwtService) {}

	async loginWithCredentials(
		authDto: AuthDto,
	): Promise<{ access_token: string }> {
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
			access_token: this.jwtTokenService.sign(payload),
		};
	}
}
