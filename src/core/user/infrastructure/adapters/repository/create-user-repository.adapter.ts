import { Injectable } from '@nestjs/common';
import { DataBaseConnectService } from '@src/core/data-base/services/data-base-connect.service';
import { UserEntity } from '@src/core/user/domain/entity/user.entity';
import { UserRepositoryPort } from '@src/core/user/domain/ports/user-repository.port';

@Injectable()
export class CreateUserRepositoryAdapter implements UserRepositoryPort {
	constructor(private db: DataBaseConnectService) {}

	async create(user: UserEntity): Promise<any> {
		return this.db.user.create({
			data: { email: user.email, name: user.name },
		});
	}
}
