import { UserEntity } from '../entity/user.entity';

export interface UserRepositoryPort {
	create(user: UserEntity): Promise<any>;
	update?(user: UserEntity): Promise<UserEntity>;
	delete?(user: Partial<UserEntity>): Promise<void>;
	find?(user: Partial<UserEntity>): Promise<UserEntity>;
	findByEmail?(email: string): Promise<UserEntity>;
}
