import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';
import { CreateUserApplicationService } from '@src/core/user/application/create-user-application.service';
import { CreateUserDto } from '@src/core/user/application/dtos/create-user.dto';
import { GoogleAuthConfig } from '../constants/googleAuthConfig';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(
		private readonly createUserApplicationService: CreateUserApplicationService,
	) {
		super(GoogleAuthConfig.googleAuthStrategy());
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: unknown, user: unknown, info?: unknown) => void,
	): Promise<any> {
		const { email, displayName, picture } = profile;

		const existingUser = await this.createUserApplicationService.findByEmail(
			profile.email,
		);

		if (existingUser) {
			done(null, existingUser);
			return null;
		}

		const payload = {
			email: email,
			name: displayName,
			picture: picture,
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
