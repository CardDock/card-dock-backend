import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';
import { AuthEntity } from '../../domain/entitys/auth/auth.entity';

@Injectable()
export class EmailCreateService {
	constructor(private userRepository: AuthRepositoryPort) {}

	public async create(authEntity: AuthEntity): Promise<unknown> {
		const user = await this.userRepository.create(authEntity);

		if (!user)
			throw new NotFoundException(
				`User with email ${authEntity.email} not created`,
			);

		return user;
	}
}
