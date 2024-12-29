import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('emailfind')
export class EmailFindController {
	constructor(private readonly emailFindService: EmailFindService) {}

	@UseGuards(JwtAuthGuard)
	@Get(':email')
	async getUserByEmail(@Param('email') email: string) {
		return this.emailFindService.findByEmail(email);
	}
}
