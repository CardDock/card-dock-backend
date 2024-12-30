import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../domain/ports/user-repository.port';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from '../domain/entity/user.entity';

@Injectable()
export class CreateUserApplicationService {
		constructor(
			@Inject('UserRepositoryPort') private readonly userRepositoryPort: UserRepositoryPort,
		) {}

		public async create(user: CreateUserDto): Promise<any> {
			const newUser = new UserEntity(
				user.email,
				user.name,
				user.email,
			);

			return this.userRepositoryPort.create(newUser);
		}
}
