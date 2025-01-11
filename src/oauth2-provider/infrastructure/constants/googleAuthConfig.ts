export class GoogleAuthConfig {
	public static googleAuthStrategy() {
		return {
			clientID: process.env.GOOGLE_APP_ID,
			clientSecret: process.env.GOOGLE_APP_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK_URL,
			scope: ['email', 'profile'],
		};
	}
}
