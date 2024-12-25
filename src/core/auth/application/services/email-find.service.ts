import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';

@Injectable()
export class EmailFindService {
	constructor(private userRepository: AuthRepositoryPort) {}

	public async findByEmail(email: string): Promise<unknown> {
		const user = await this.userRepository.findByEmail(email);

		if (!user)
			throw new NotFoundException(`User with email ${email} not found`);

		return user;
	}
}
