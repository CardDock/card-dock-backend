import { UserEntity } from '../entity/user.entity';

export interface UserRepositoryPort {
	create(user: UserEntity): Promise<UserEntity>;
	update(user: UserEntity): Promise<UserEntity>;
	delete(id: string): Promise<void>;
	findById(id: string): Promise<UserEntity>;
	findByEmail(email: string): Promise<UserEntity>;
}
