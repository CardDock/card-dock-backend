import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
	constructor() {
		super();
	}

	handleRequest(err, user) {
		if (!user && err.name === 'TokenError') {
			throw new UnauthorizedException('Codigo de Google expirado');
		}

		return user;
	}
}
