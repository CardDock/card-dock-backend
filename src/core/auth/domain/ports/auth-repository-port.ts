export interface AuthRepositoryPort {
	findByEmail: (email: string) => Promise<unknown>;
}
