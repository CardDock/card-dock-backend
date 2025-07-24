import { EnvironmentConfig } from '@src/config/environment.config';

export const JwtKey = {
	secret: EnvironmentConfig.getJwtSecret(),
};
