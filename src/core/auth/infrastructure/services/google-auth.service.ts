import { Injectable } from '@nestjs/common';
import { PayloadReturnauthGoogle } from '../interfaces/payload-return-auth-google.interface';
import { DataBaseConnectService } from '@src/core/data-base/services/data-base-connect.service';

@Injectable()
export class GoogleAuthService {
	constructor(private db: DataBaseConnectService) {}

	public async searchGoogleUser(
		user: PayloadReturnauthGoogle,
	): Promise<unknown> {
		return this.db.user.findUnique({
			where: { email: user.email },
		});
	}

	public async searchGoogleUser2(email: string): Promise<unknown> {
		return this.db.user.findUnique({
			where: { email },
		});
	}

	public async createGoogleUser(
		user: PayloadReturnauthGoogle,
	): Promise<unknown> {
		return this.db.user.create({
			data: { email: user.email, name: user.name },
		});
	}
}
