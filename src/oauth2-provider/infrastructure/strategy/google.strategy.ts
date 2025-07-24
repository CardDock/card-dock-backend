import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';
import { GoogleAuthConfig } from '../constants/googleAuthConfig';
import { GoogleValidatePort } from '@src/oauth2-provider/application/ports/google-validate.port';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(
		@Inject('GoogleValidatePort')
		private readonly googleValidateAplicationService: GoogleValidatePort,
	) {
		super(GoogleAuthConfig.googleAuthStrategy());
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: unknown, user: unknown, info?: unknown) => void,
	): Promise<any> {
		const user =
			this.googleValidateAplicationService.handleGoogleValidate(profile);

		done(null, user);
	}
}
