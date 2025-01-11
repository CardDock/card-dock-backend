import { Injectable } from '@nestjs/common';
import { DataBaseConnectService } from '@src/core/data-base/infrastructure/services/data-base-connect.service';
import { AuthRepositoryPort } from '../../../domain/ports/auth-repository-port';
import { AuthEntity } from '@src/core/auth/domain/entitys/auth/auth.entity';

@Injectable()
export class AuthRepositoryAdapter implements AuthRepositoryPort {
	constructor(private db: DataBaseConnectService) {}

	public async findByCredencial(auth: AuthEntity): Promise<unknown> {
		return this.db.user.findUnique({
			where: { email: auth.username.getValue() },
			include: {
				authProviders: {
					where: {
						passwordHash: auth.password.getValue(),
					},
				},
			},
		});
	}
}
