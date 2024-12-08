import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';
import { GoogleAuthConfig } from '../constants/googleAuthConfig';
import { PayloadReturnauthGoogle } from '../interfaces/payload-return-auth-google.interface';
import { GoogleAuthService } from './google-auth.service';

@Injectable()
export class GoogleStrategyService extends PassportStrategy(
	Strategy,
	'google',
) {
	constructor(private googleAuthService: GoogleAuthService) {
		super(GoogleAuthConfig.googleAuthStrategy());
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: unknown, user: unknown, info?: unknown) => void,
	): Promise<PayloadReturnauthGoogle | null> {
		const { email, name, displayName, picture } = profile;

		const existingUser = await this.googleAuthService.searchGoogleUser(profile);

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

		this.googleAuthService.createGoogleUser(payload);

		done(null, payload);

		return payload;
	}
}
