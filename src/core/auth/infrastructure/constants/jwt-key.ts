import { env } from 'process';

export const JwtKey = {
	secret: env.JWT_SECRET,
};
