import { AuthEntity } from '../entitys/auth/auth.entity';

export interface AuthRepositoryPort {
	findByCredencial(auth: AuthEntity): Promise<unknown>;
}
