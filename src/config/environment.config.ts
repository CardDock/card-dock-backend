import * as dotenv from 'dotenv';

export class EnvironmentConfig {
	public static load(): void {
		dotenv.config();
	}

	public static getPort(): number {
		return Number(process.env.PORT || 3000);
	}

	public static getJwtSecret(): string {
		return process.env.JWT_SECRET || 'secret';
	}
}
