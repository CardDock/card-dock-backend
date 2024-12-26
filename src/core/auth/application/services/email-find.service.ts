import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';

export class EmailFindService {
	constructor(private readonly userRepository: AuthRepositoryPort) {}

	public async findByEmail(email: string): Promise<unknown> {
		const user = await this.userRepository.findByEmail(email);

		if (!user) throw new Error(`User with email ${email} not found`);

		return user;
	}
}
