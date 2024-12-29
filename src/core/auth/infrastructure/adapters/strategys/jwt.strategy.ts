import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtKey } from '../../constants/jwt-key';

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: JwtKey.secret,
		});
	}

	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username };
	}
}
