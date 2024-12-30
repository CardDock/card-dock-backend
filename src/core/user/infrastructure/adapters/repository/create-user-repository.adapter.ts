import { Injectable } from '@nestjs/common';
import { DataBaseConnectService } from '@src/core/data-base/services/data-base-connect.service';
import { UserEntity } from '@src/core/user/domain/entity/user.entity';
import { UserRepositoryPort } from '@src/core/user/domain/ports/user-repository.port';

@Injectable()
export class CreateUserRepositoryAdapter implements UserRepositoryPort {
	constructor(private db: DataBaseConnectService) {}

	async create(user: UserEntity): Promise<any> {
		try {
			return await this.db.$transaction(async (tx) => {
				const newUser = await tx.user.create({
					data: { email: user.email, name: user.name },
				});

				await tx.userProfile.create({
					data: {
						portraitUser: user.picture,
						user: {
							connect: { id: newUser.id }, // Aquí `userId` es el ID del usuario existente
						},
					},
				});
			});
		} catch (error) {
			return error;
		}
	}
}
