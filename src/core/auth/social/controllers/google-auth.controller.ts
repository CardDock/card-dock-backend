/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
	getLoginGoogle,
	PayloadReturnauthGoogle,
} from '../interfaces/payload-return-auth-google.interface';

@Controller('auth')
export class GoogleAuthController {
	@Get('google/login')
	@UseGuards(AuthGuard('google'))
	async googleLogin(): Promise<getLoginGoogle> {
		return { msg: 'Google Authentication' };
	}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleLoginRedirect(@Req() req: any): Promise<PayloadReturnauthGoogle> {
		return req.user;
	}
}
