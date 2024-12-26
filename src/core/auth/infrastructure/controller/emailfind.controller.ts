import { Controller, Get, Param } from '@nestjs/common';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';

@Controller('emailfind')
export class EmailFindController {
	constructor(private readonly emailFindService: EmailFindService) {}

	@Get(':email')
	async getUserByEmail(@Param('email') email: string) {
		return this.emailFindService.findByEmail(email);
	}
}
