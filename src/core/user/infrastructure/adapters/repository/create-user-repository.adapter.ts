import { Injectable } from '@nestjs/common';
import { DataBaseConnectService } from '@src/core/data-base/infrastructure/services/data-base-connect.service';
import { UserEntity } from '@src/core/user/domain/entity/user.entity';
import { UserRepositoryPort } from '@src/core/user/domain/ports/user-repository.port';

@Injectable()
export class CreateUserRepositoryAdapter implements UserRepositoryPort {
	constructor(private db: DataBaseConnectService) {}

	async create(user: UserEntity): Promise<any> {
		try {
			return await this.db.$transaction(async (tx) => {
				const newUser = await tx.user.create({
					data: { email: user.email.getValue(), name: user.name.getValue() },
				});

				await tx.userProfile.create({
					data: {
						portraitUser: user.picture.getValue(),
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

	async findByEmail(email: string): Promise<any> {
		try {
			return await this.db.user.findUnique({
				where: { email: email },
			});
		} catch (error) {
			return error;
		}
	}
}
