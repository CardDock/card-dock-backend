import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private jwtTokenService: JwtService,
	) {}

	signToken(payload: any): string {
		return this.jwtTokenService.sign(payload);
	}
}
