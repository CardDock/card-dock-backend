import { Injectable } from '@nestjs/common';
import { PayloadReturnauthGoogle } from '../interfaces/payload-return-auth-google.interface';
import { PrismaService } from '@src/core/services/prisma.service';

@Injectable()
export class GoogleAuthService {
	constructor(private prisma: PrismaService) {}

	public async searchGoogleUser(
		user: PayloadReturnauthGoogle,
	): Promise<unknown> {
		return this.prisma.user.findUnique({
			where: { email: user.email },
		});
	}

	public async createGoogleUser(
		user: PayloadReturnauthGoogle,
	): Promise<unknown> {
		return this.prisma.user.create({
			data: { email: user.email, name: user.name },
		});
	}
}
