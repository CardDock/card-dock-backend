import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenManagerAdapter {
	constructor(private jwtTokenService: JwtService) {}

	signToken(accessToken: any): string {
		return this.jwtTokenService.sign(accessToken);
	}
}
