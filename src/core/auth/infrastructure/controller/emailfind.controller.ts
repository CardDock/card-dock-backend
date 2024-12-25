import { Controller, Get, Param } from '@nestjs/common';
import { EmailFindService } from '../../application/services/email-find.service';

@Controller('auth')
export class EmailFindController {
	constructor(private readonly emailFindService: EmailFindService) {}

	@Get(':email')
	async getUserByEmail(@Param('email') email: string) {
		return this.emailFindService.findByEmail(email);
	}
}
