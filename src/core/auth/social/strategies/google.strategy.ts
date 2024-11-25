/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';
import { GoogleAuthConfig } from '../constants/googleAuthConfig';
import { PayloadReturnauthGoogle } from '../interfaces/payload-return-auth-google.interface';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor() {
		super(GoogleAuthConfig.googleAuthStrategy());
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: unknown, user: unknown, info?: unknown) => void,
	): Promise<PayloadReturnauthGoogle | null> {
		const { email, name, displayName, picture } = profile;

		const payload: PayloadReturnauthGoogle = {
			email: email,
			name: displayName,
			firstName: name.givenName,
			lastName: name.familyName,
			picture: picture,
			tokens: {
				accessToken: accessToken,
				refreshToken: refreshToken,
			},
		};

		done(null, payload);

		return payload;
	}
}
