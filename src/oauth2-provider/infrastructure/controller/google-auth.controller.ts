import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/google.guard';

@Controller('auth/google')
export class GoogleAuthController {
	@Get('/redirect')
	@UseGuards(GoogleAuthGuard)
	async googleLoginRedirect(): Promise<any> {
		return {
			statusCode: 200,
			message: {
				user_auth_google: 'ok',
			},
		};
	}
}
