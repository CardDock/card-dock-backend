import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleAuthController } from './social/controllers/google-auth.controller';
import { GoogleStrategy } from './social/strategies/google.strategy';

@Module({
	imports: [],
	controllers: [AuthController, GoogleAuthController],
	providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
