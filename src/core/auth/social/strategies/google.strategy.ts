/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor() {
		super({
			clientID: process.env.GOOGLE_APP_ID,
			clientSecret: process.env.GOOGLE_APP_SECRET,
			callbackURL: 'https://localhost:3000/auth/google/redirect',
			scope: ['email', 'profile'],
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: any, user: any, info?: any) => void,
	): Promise<any> {
		const { email, name, displayName, picture } = profile;

		const payload = {
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
	}
}
