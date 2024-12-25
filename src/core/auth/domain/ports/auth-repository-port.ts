import { AuthEntity } from '../entitys/auth/auth.entity';

export interface AuthRepositoryPort {
	create: (auth: AuthEntity) => Promise<unknown>;
	findByEmail: (email: string) => Promise<unknown>;
}
