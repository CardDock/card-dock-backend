import { Injectable } from '@nestjs/common';
import { CreateUserApplicationService } from '@src/user/application/create-user-application.service';
import { CreateUserDto } from '@src/user/application/dtos/create-user.dto';
import { GoogleValidatePort } from '../ports/google-validate.port';

@Injectable()
export class GoogleValidateApplicationService implements GoogleValidatePort {
	constructor(
		private readonly createUserApplicationService: CreateUserApplicationService,
	) {}

	async handleGoogleValidate(profile: any) {
		const { email, displayName, picture } = profile;

		const existingUser =
			await this.createUserApplicationService.findByEmail(email);

		if (existingUser) return null;

		const userCreate: CreateUserDto = {
			name: displayName,
			email: email,
			picture: picture,
		};

		return this.createUserApplicationService.create(userCreate);
	}
}
