import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';
import { GoogleAuthConfig } from '../../constants/googleAuthConfig';
import { PayloadReturnauthGoogle } from '../../interfaces/payload-return-auth-google.interface';
import { EmailFindService } from '../../../application/services/email-find.service';
import { CreateUserApplicationService } from '@src/core/user/application/create-user-application.service';
import { CreateUserDto } from '@src/core/user/application/dtos/create-user.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(
		private readonly emailFindService: EmailFindService,
		private readonly createUserApplicationService: CreateUserApplicationService,
	) {
		super(GoogleAuthConfig.googleAuthStrategy());
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: unknown, user: unknown, info?: unknown) => void,
	): Promise<PayloadReturnauthGoogle | null> {
		const { email, name, displayName, picture } = profile;

		const existingUser = await this.emailFindService.findByEmail(profile.email);

		if (existingUser) {
			done(null, existingUser);
			return null;
		}

		const payload: PayloadReturnauthGoogle = {
			email: email,
			name: displayName,
			firstName: name.givenName,
			lastName: name.familyName,
			picture: picture,
			accessToken: accessToken,
		};

		this.createNewUserGoogle(payload);

		done(null, payload);

		return payload;
	}

	private createNewUserGoogle(payload) {
		const userCreate: CreateUserDto = {
			name: payload.name,
			email: payload.email,
			picture: payload.picture,
		};

		return this.createUserApplicationService.create(userCreate);
	}
}
