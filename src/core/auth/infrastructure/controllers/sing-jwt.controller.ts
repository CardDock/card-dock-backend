import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from '../../application/dtos/auth.dto';
import { AuthAplicationService } from '../../application/services/auth-aplication.service';

@Controller()
export class SingJwtController {
	constructor(private readonly authAplicationService: AuthAplicationService) {}

	@Post('login')
	async login(@Body() authDto: AuthDto) {
		return this.authAplicationService.loginWithCredentials(authDto);
	}
}
