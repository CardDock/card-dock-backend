import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth2';
import { GoogleAuthConfig } from '../constants/googleAuthConfig';
import { PayloadReturnauthGoogle } from '../interfaces/payload-return-auth-google.interface';
import { EmailFindService } from '../../application/services/email-find.service';
import { AuthRepositoryPort } from '../../domain/ports/auth-repository-port';

@Injectable()
export class GoogleStrategy extends PassportStrategy(
	Strategy,
	'google',
) {
	constructor(
		private readonly emailFindService: EmailFindService,
		@Inject('AuthRepositoryPort')
		private readonly userRepository: AuthRepositoryPort,
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

		// const instanceUser = new EmailFindService(this.userRepository);
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

		// Crea el usuario llamando al puerto de crear usuario del modulo User
		// this.googleAuthService.createGoogleUser(payload);

		done(null, payload);

		return payload;
	}
}
