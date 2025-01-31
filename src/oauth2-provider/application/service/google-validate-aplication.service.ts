import { Injectable } from '@nestjs/common';
import { CreateUserApplicationService } from '@src/user/application/create-user-application.service';
import { CreateUserDto } from '@src/user/application/dtos/create-user.dto';
import { GoogleValidatePort } from '../ports/google-validate.port';
import { ProfileEntity } from '@src/oauth2-provider/domain/profile/entity/profile.entity';

@Injectable()
export class GoogleValidateApplicationService implements GoogleValidatePort {
	constructor(
		private readonly createUserApplicationService: CreateUserApplicationService,
	) {}

	async handleGoogleValidate(profile: any): Promise<unknown> {
		const profileEntity = ProfileEntity.create(
			profile.email,
			profile.displayName,
			profile.picture,
		);

		const existingUser = await this.createUserApplicationService.findByEmail(
			profileEntity.email,
		);

		if (existingUser) return null;

		const userCreate: CreateUserDto = {
			name: profileEntity.name,
			email: profileEntity.email,
			picture: profileEntity.picture,
		};

		return this.createUserApplicationService.create(userCreate);
	}
}
