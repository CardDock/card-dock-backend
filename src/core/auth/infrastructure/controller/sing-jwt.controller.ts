import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller()
export class SingJwtController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	async login(@Request() req) {
		return this.authService.loginWithCredentials(req.body);
	}
}
