/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class GoogleAuthController {
	@Get('google/login')
	@UseGuards(AuthGuard('google'))
	async googleLogin(): Promise<unknown> {
		return { msg: 'Google Authentication' };
	}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleLoginRedirect(@Req() req: any): Promise<unknown> {
		return req.user;
	}
}
