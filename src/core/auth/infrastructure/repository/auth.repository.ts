import { Injectable } from '@nestjs/common';
import { DataBaseConnectService } from '@src/core/data-base/services/data-base-connect.service';
import { AuthEntity } from '../../domain/entitys/auth/auth.entity';
import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';

@Injectable()
export class AuthRepository implements AuthRepositoryPort {
	constructor(private db: DataBaseConnectService) {}

	public async findByEmail(email: string): Promise<unknown> {
		return this.db.user.findUnique({
			where: { email },
		});
	}

	public async create(auth: AuthEntity): Promise<unknown> {
		return this.db.user.create({
			data: { email: auth.email.get(), name: auth.name.value },
		});
	}
}
