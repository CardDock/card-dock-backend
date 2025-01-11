import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../domain/ports/user-repository.port';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from '../domain/entity/user.entity';
import { UserEmail } from '../domain/entity/value-objects/user-email';
import { UserPicture } from '../domain/entity/value-objects/user-picture';
import { UserName } from '../domain/entity/value-objects/user-name';

@Injectable()
export class CreateUserApplicationService {
	constructor(
		@Inject('UserRepositoryPort')
		private readonly userRepositoryPort: UserRepositoryPort,
	) {}

	public async create(user: CreateUserDto): Promise<any> {
		const newUser = new UserEntity(
			new UserEmail(user.email),
			new UserName(user.name),
			new UserPicture(user.picture),
		);

		try {
			return this.userRepositoryPort.create(newUser);
		} catch (error) {
			return error;
		}
	}

	public async findByEmail(email: string): Promise<any> {
		try {
			return this.userRepositoryPort.findByEmail(email);
		} catch (error) {
			return error;
		}
	}
}
