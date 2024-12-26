import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getLoginGoogle } from '../interfaces/payload-return-auth-google.interface';

@Controller('auth')
export class GoogleAuthController {
	@Get('google/login')
	@UseGuards(AuthGuard('google'))
	async googleLogin(): Promise<getLoginGoogle> {
		return {
			statusCode: 307,
			message: {
				user_auth_google: 'redirecting',
			},
		};
	}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleLoginRedirect(): Promise<getLoginGoogle> {
		return {
			statusCode: 200,
			message: {
				user_auth_google: 'ok',
			},
		};
	}
}
