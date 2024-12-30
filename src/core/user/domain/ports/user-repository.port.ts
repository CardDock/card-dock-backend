import { UserEntity } from '../entity/user.entity';

export interface UserRepositoryPort {
	create(user: UserEntity): Promise<any>;
	update?(user: UserEntity): Promise<UserEntity>;
	delete?(id: string): Promise<void>;
	findById?(id: string): Promise<UserEntity>;
	findByEmail?(email: string): Promise<UserEntity>;
}
